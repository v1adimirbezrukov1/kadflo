$(document).ready(function () {
$(document).ready(function() {
	$('.select2').select2()

	$(document).on('select2:open', () => {
		$('body').addClass('select-close')
	})

	$(document).on('select2:close', () => {
		$('body').removeClass('select-close')
	})

	$('.custom-select__head').on('click', function() {
		$(this).toggleClass('active')
		$(this).next().toggleClass('active')
	})

	$('.select-custom__head').on('click', function() {
		$(this).toggleClass('active')
		$(this).next().toggleClass('active')
	})

	$('.select-custom__dropdown--item').on('click', function() {
		var text = $(this).find('span').text()
		var img = $(this).find('img').attr('src')

		var parent = $(this).closest('.select-custom')

		var textName = parent.find('.select-custom__name span')
		var imgName = parent.find('.select-custom__name img')



		textName.html(text)
		imgName.attr('src', img)

		$('.select-custom__dropdown').removeClass('active')
		$('.select-custom__head').removeClass('active')
	})



	$('.baza__btn').on('click', function() {
		$('.baza__btn').removeClass('active')
		$(this).addClass('active')
	})
})

$(document).ready(function() {
	$('.header__burger').on('click', function() {
		$(this).toggleClass('active')

		$('.header__mobile').toggleClass('active')

		$('.header').toggleClass('active')

		$('body').toggleClass('hidden')
	})

	$('.header__close').on('click', function() {
		$('.header__mobile').removeClass('active')

		$('.header').removeClass('active')

		$('body').removeClass('hidden')
	})

	$('.header__search').on('click', function() {
		$(this).toggleClass('active')
		$('.header-search').toggleClass('active')

		return false
	})

	let $searchInput = $(".header-search input[type='text']")
	let $dropdown = $('.header__search--dropdown')
	let $loopIcon = $('.header-search')

	$(document).on('click', function(e) {
		if (
			!$(e.target).closest(".header__search--dropdown, input[type='text']")
				.length
		) {
			$dropdown.fadeOut(200)

			if ($searchInput.val().trim().length === 0) {
				$loopIcon.removeClass('active')
			}
		}
	})
})

});