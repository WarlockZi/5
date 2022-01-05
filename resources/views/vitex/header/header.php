<div class='header'>

<!--	--><?//$index=$this->route['action'] == "index" &&$this->route['controller'] == "Main"?>

	<? if (route('welcome')): ?>
		<div class="logo">
			<? include resource_path('views/vitex/header/logo_plus_desc.php'); ?>
		</div>
	<? else: ?>
		<a href='/' class="logo" aria-label='На главную' >
			<? include resource_path('views/vitex/header/logo_plus_desc.php'); ?>
		</a>
	<? endif; ?>


<!--	--><?// include resource_path('view/components/header/search.php';?>
	<? include resource_path('views/vitex/header/phone.php'); ?>
	<? include resource_path('views/vitex/header/location.php'); ?>

	<?include resource_path('views/vitex/header/user_menu.php')?>

</div>
