(function (window){
	'use strict';

	if (window.JCFeedbackForm)
		return;

	window.JCFeedbackForm = function (arParams){
		this.params=arParams;
		this.formSubmit=BX(this.params.FORM_ID + '_submit');
		this.form=BX(this.params.FORM_ID);
		this.captcha={};
		this.name=this.params.OBJ_NAME;
		this.message=BX(this.params.FORM_ID+'MessageArea');
		BX.ready(BX.delegate(this.init,this));
	}
	window.JCFeedbackForm.prototype = {
		init: function(){
			this.initDropZone();
			this.locationFIll();
			this.initFormFields();
			if(this.params.USE_CAPTCHA=='Y'){
				var waitRecaptha = setInterval(params => {
					if(grecaptcha){
						this.OnloadCallback();
						clearInterval(waitRecaptha);
					}
				},500);
				BX.bind(this.formSubmit, 'click', BX.proxy(this.validateForm, this));
			}
			BX.bind(this.formSubmit, 'click', BX.proxy(this.validateForm, this));
		},
		customFields: function() {
			
		},
		initFormFields: function() {
			if($.ui!=undefined)
				$(this.form).find("select").selectmenu();
			if(window.IMask!=undefined)
			$(".phone-mask").each(function(index, el) {
				var phoneMask = IMask(el, {
				    mask: '+{7} (000) 000-00-00'
				  });
			});
		},
		locationFIll: function() {
			var locationStringFields=BX.findChildren(this.form,{"class" : "bx-ui-sls-fake"},true);
			var parent,originalnput;
			locationStringFields.forEach(function(el, index){
				parent=BX.findParent(el,{'class' : 'bx-ui-sls-container'});
				originalnput=BX.findPreviousSibling(parent,{'class' : 'dropdown-field'});
				BX.adjust(el,{'attrs' : {'name' : originalnput.getAttribute('name')+'_string'}});
			});
		},
		initDropZones: function(){
			$('.input__file-button').each(function(index, el) {
				this.initDropZone(el);
			});
		},
		getEntity: function(parent, entity, additionalFilter)
		{
			if (!parent || !entity)
				return null;

			additionalFilter = additionalFilter || '';

			return parent.querySelector(additionalFilter + '[data-entity="' + entity + '"]');
		},

		getEntities: function(parent, entity, additionalFilter)
		{
			if (!parent || !entity)
				return {length: 0};

			additionalFilter = additionalFilter || '';

			return parent.querySelectorAll(additionalFilter + '[data-entity="' + entity + '"]');
		},
		initDropZone: function(el) {
			var dropZone = $(el);
			if(!dropZone.length)return;
			var	popup = $(this.form),
		        fileInput = dropZone.find('input'),
		        chosenLine = dropZone.find('.input__file-button-text'),
		        maxFileSize = 10000000;//10 mb

		    if (typeof(window.FileReader) == 'undefined') {
		        chosenLine.text('Не поддерживается браузером!');
		        chosenLine.addClass('error');
		    }
		    popup[0].ondragleave = function(event) {
		    	if(!$(this).find(event.relatedTarget).length){
				    popup.removeClass('file_hover');
				    chosenLine.html(BX.message('MFT_FILE_HELP_NOT'));
		    	}
		        return false;
		    };
		    popup[0].ondragover = function() {
		        popup.addClass('file_hover');
		        chosenLine.html(BX.message('MFT_FILE_HELP_DRAG'));
		        return false;
		    };
		        
		    fileInput.change(function() {
		         let files = this.files;
		         updateFiles(files);
		    });

		    popup[0].ondrop = function() {
		    	popup.removeClass('file_hover');
		    };

		    dropZone[0].ondrop = function(event) {
		        event.preventDefault();
		        popup.removeClass('file_hover');
		        dropZone.addClass('step-body-wrapper__item-file_dropped');
		        var files = event.dataTransfer.files;
		        fileInput[0].files=files;
		        updateFiles(files);
		    };

		    function updateFiles(files){
		        var totalWeight=0,
			        outputline='';
		        
		        $(files).each(function(index, el) {
		            outputline+=el.name+', ';
		            totalWeight+=el.size;
		        });
		        if(totalWeight>=maxFileSize){
		            fileInput.value = '';
		            files=FileList;
		        }
		        outputline=outputline.slice(0, -2);
		        if(!files.length){
		        	outputline=BX.message('MFT_FILE_HELP_NOT');
		        	dropZone.removeClass('step-body-wrapper__item-file_dropped');
		        }
		        else dropZone.addClass('step-body-wrapper__item-file_dropped');
		        chosenLine.html(outputline);
		    };
		},
		
		OnloadCallback: function(){
			this.captcha = grecaptcha.render(this.params.FORM_ID+'RecaptchaId', {
	            'sitekey' : this.params.PUBLIC_KEY,
	            'size' : 'invisible',
	            'callback' : this.name+'OnSubmit'
	          });
		},
		OnSubmit: function(token){
			if(this.params.AJAX_MODE=='Y'){
				BX.ajax.submitComponentForm(this.form, 'comp_'+this.params.AJAX_ID, true);
	    		this.form.submit();
			}
			else{
				this.form.submit();
			}
		},
		validateFields: function(){
			var error=0;
			var fields=this.getEntities(this.form, 'validate-field','.required');
			if(fields)
				fields.forEach(function(el, index) {
					BX.bind(el,'click', function (event) {
						BX.removeClass(BX.findParent(el, {"attribute" : 'data-entity'}), 'form-field-error');
					})
					if(!BX(el).value){
						BX.addClass(BX.findParent(el, {"attribute" : 'data-entity'}),'form-field-error');
						error++;
					}
				});
			if(error)
				return false;
			else return true;
		},
		validateForm: function(event) {
			event.preventDefault();
			if(this.validateFields()){
				this.customFields();
				if(this.params.USE_CAPTCHA=='Y'){
					grecaptcha.execute(this.captcha);
				}
				else this.OnSubmit();
			}
		}
	};

})(window);