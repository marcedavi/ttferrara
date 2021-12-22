<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">

    <?php wp_head(); ?>
</head>

<body <?php body_class('bg-gray-50 text-gray-800 antialiased'); ?>>

    <div id="page" class="min-h-screen flex flex-col">

        <header class="fixed w-full bg-gray-50 z-50 shadow-xl">
            <div class="container">
                <a href="<?php echo get_site_url(); ?>" class="h-24 w-44 absolute top-0 left-0 right-0 mx-auto">
                    <?php echo wp_get_attachment_image(get_theme_mod('custom_logo_setting'), 'medium', false, array(
                        'class' => 'h-24 w-auto absolute top-0 left-0 right-0 mx-auto'
                    )); ?>
                </a>

                <div class="absolute top-8 lg:hidden">
                    <a href="#" aria-label="Toggle navigation" id="primary-menu-toggle">
                        <svg viewBox="0 0 20 20" class="inline-block w-6 h-6" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g stroke="none" stroke-width="1" fill="currentColor" fill-rule="evenodd">
                                <g id="icon-shape">
                                    <path d="M0,3 L20,3 L20,5 L0,5 L0,3 Z M0,9 L20,9 L20,11 L0,11 L0,9 Z M0,15 L20,15 L20,17 L0,17 L0,15 Z" id="Combined-Shape"></path>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>

                <div id="main-menu" class="flex flex-col mt-24 max-h-0 overflow-hidden transition-height ease-in duration-300 lg:mt-0 lg:flex-row lg:justify-between lg:items-center lg:max-h-96 lg:h-24">
                    <?php
                    wp_nav_menu(
                        array(
                            'container_id'    => 'primary-menu-left',
                            'container_class' => 'mt-4 lg:mt-0 lg:p-0 lg:bg-transparent lg:block',
                            'menu_class'      => 'font-bold uppercase lg:flex lg:-mx-4',
                            'theme_location'  => 'primary-left',
                            'li_class'        => 'my-1 lg:my-0 lg:mx-4',
                            'fallback_cb'     => false,
                        )
                    );
                    ?>

                    <?php
                    wp_nav_menu(
                        array(
                            'container_id'    => 'primary-menu-right',
                            'container_class' => 'pb-4 lg:mt-0 lg:p-0 lg:bg-transparent lg:block',
                            'menu_class'      => 'font-bold uppercase lg:flex lg:-mx-4',
                            'theme_location'  => 'primary-right',
                            'li_class'        => 'my-1 lg:my-0 lg:mx-4',
                            'fallback_cb'     => false,
                        )
                    );
                    ?>
                </div>
            </div>
        </header>

        <div id="content" class="site-content flex-grow mt-16">
            <main>