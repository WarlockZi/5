<ul class="admin-layout__sidebar accordion">
    <a class="admin-sidebar__logo" href="/">
	<? include ROOT . '/app/view/components/header/header/logo_VITEX_white.php' ?>
    </a>

	<a class="house neon" href="/adminsc">
		<? include ICONS . '/header-menu/grid.svg'; ?>
		Главная
	</a>

	<? if (in_array('3', $user['rights'])): // header ?>
		<li class="has-children level1">
			<input type="checkbox" id="crm">
			<label for="crm">
				<? include ICONS . '/header-menu/user-check.svg'; ?>
				CRM
			</label>
			<ul>
				<a data-id="1" class="level2 neon" href="/adminsc/crm/orders">
					Заказы</a>
				<a data-id="1" class="level2 neon" href="/adminsc/crm/users">Пользователи</a>
				<a data-id="1" class="level2 neon" href="/adminsc/crm">crm</a>
			</ul>
		</li>
	<? endif; ?>


	<? if (in_array('3', $user['rights'])): // header ?>
		<li class="has-children level1">
			<input type="checkbox" id="settings">
			<label for="settings">
				<? include ICONS . '/header-menu/settings-streamline.svg'; ?>
				Настройки
			</label>

			<ul>
				<a data-id="2" class="level2 neon" href='/adminsc/Sitemap'>Создать SiteMap</a>
				<a data-id="3" class="level2 neon" href='/adminsc/settings/dump'>Dump</a>
				<a data-id="6" class="level2 neon" href='/adminsc/settings/props'>Свойства (товаров, пользователей)</a>
				<a data-id="9" class="level2 neon" href='/adminsc/settings/pics'>Картинки</a>
				<a data-id="10" class="level2 neon" href='/adminsc/settings/cache'>Очистить кэш</a>
			</ul>
		</li>
	<? endif; ?>

	<li class="has-children level1">
		<input type="checkbox" id="test">
		<label for="test">
			<? include ICONS . '/header-menu/target.svg'; ?>
			Тесты
		</label>
		<ul>
			<a class="level2 neon" href="/test/do">Проходить тесты</a>
			<? if (in_array('3', $user['rights'])): // header ?>
				<a class="level2 neon" href="/adminsc/test/edit">Редактировать тесты</a>
				<a data-id="10" class="level2" href="/adminsc/crm/testresults">Результаты тестов </a>
			<? endif; ?>
		</ul>
	</li>


	<a class="sidebar__main neon" href="/">
		<? include ICONS . '/header-menu/house.svg' ?>
		На сайт
	</a>

	<li class="admin-layout__sidebar-tail"></li>


</ul>
