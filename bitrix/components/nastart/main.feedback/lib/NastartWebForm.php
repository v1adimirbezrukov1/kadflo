<?php
class NastartWebForm
{
	private $arSiteId=[];
	private $ibType='nastartWebForms';
	function __construct()
	{
		$rsSite = CSite::GetList($by = 'sort', $order = 'asc', Array('ACTIVE' => 'Y'));
		while ($arSite = $rsSite->fetch()) {
		    $this->arSiteId[] = $arSite['LID'];
		}
	}
	public function checkCreateIbType(){
		if(!$this->checkIbType($this->ibType)){
			$this->createIbType($this->ibType);
		}
	}
	public function createIbType($id){
		$arFields = Array(
			'ID'=>$id,
			'SECTIONS'=>'N',
			'IN_RSS'=>'N',
			'SORT'=>100,
			'LANG'=>Array(
				'en'=>Array(
					'NAME'=> GetMessage("MF_IBTYPE_NAME"),
					'SECTION_NAME'=>GetMessage("MF_IBTYPE_SECTIONNAME"),
					'ELEMENT_NAME'=>GetMessage("MF_IBTYPE_ELEMENTNAME")
				),
				'ru'=>Array(
					'NAME'=> GetMessage("MF_IBTYPE_NAME"),
					'SECTION_NAME'=>GetMessage("MF_IBTYPE_SECTIONNAME"),
					'ELEMENT_NAME'=>GetMessage("MF_IBTYPE_ELEMENTNAME")
				)
			)
		);

		$obBlocktype = new CIBlockType;
		$res = $obBlocktype->Add($arFields);
	}
	public function checkIbType($id){
		$dbRes=CIBlockType::GetByID($id);
		if($res=$dbRes->Fetch()){
			return true;
		}
		else return false;
	}
	public function checkIb($name){
		$res = CIBlock::GetList(Array('SORT' => 'ASC'), Array('TYPE' => $this->ibType,'CODE' => 'form-result-'.$name));
		if($ar_res = $res->Fetch())
			return $ar_res['ID'];
		else return false;
	}
	public function createIB($name){
		$ib = new CIBlock;
		$arNewIBFields = Array(
		    'ACTIVE' => 'Y',
		    'NAME' => GetMessage('MF_IBNAME').' '.$name,
		    'CODE' => 'form-result-'.$name,
		    'LIST_PAGE_URL' => '',
		    'DETAIL_PAGE_URL' => '',
		    'IBLOCK_TYPE_ID' => $this->ibType,
		    'SITE_ID' => $this->arSiteId,
		    'SORT' => '500',
		    'VERSION' => '2',
		    'GROUP_ID' => Array('2' => 'R')
		);
		$result = $ib->Add($arNewIBFields);
		if($result)return $result;
		else return false;
	}
	public function reArrayFiles(&$file_post) {

	    $file_ary = array();
	    $file_count = count($file_post['name']);
	    $file_keys = array_keys($file_post);

	    for ($i=0; $i<$file_count; $i++) {
	        foreach ($file_keys as $key) {
	            $file_ary[$i][$key] = $file_post[$key][$i];
	        }
	    }

	    return $file_ary;
	}

	public function addNewRecord($ibId,$data,$message=''){
		$arLoadProductArray = Array(
		    "IBLOCK_ID" => $ibId,
		    "NAME" => $data['NAME'] ? $data['NAME'] : date("d.m.Y H:i:s"),
		    "ACTIVE" => 'Y',
		    "DETAIL_TEXT" => $message,
		    "DETAIL_TEXT_TYPE" => 'html',
		    "PROPERTY_VALUES" => [],
		);
		foreach ($data as $propKey => $propValue) {
			$arLoadProductArray['PROPERTY_VALUES'][$propKey]=$propValue;
		}
		$el = new CIBlockElement;
        $idElement = $el->Add($arLoadProductArray);
        return $idElement; 
	}
}
?>