<?php

/**
 * Theme setup.
 */
function ttferrara_setup()
{
    // Disable admin bar
    show_admin_bar(false);

    // Theme supports
    add_theme_support('title-tag');
    add_theme_support('custom-logo');
    add_theme_support('post-thumbnails');

    // Custom image sizes
    add_image_size('ttferrara_large', 1280, 720);

    // Menus
    register_nav_menus(
        array(
            'primary-left' => 'Primary Menu Left',
            'primary-right' => 'Primary Menu Right',
        )
    );
}
add_action('after_setup_theme', 'ttferrara_setup');

/**
 * Enqueue theme assets.
 */
function ttferrara_enqueue_scripts()
{
    $theme = wp_get_theme();

    wp_enqueue_style('ttferrara', ttferrara_asset('css/app.css'), array(), $theme->get('Version'));
    wp_enqueue_script('ttferrara', ttferrara_asset('js/app.js'), array(), $theme->get('Version'));
}
add_action('wp_enqueue_scripts', 'ttferrara_enqueue_scripts');

/**
 * Get asset path.
 *
 * @param string  $path Path to asset.
 *
 * @return string
 */
function ttferrara_asset($path)
{
    if (wp_get_environment_type() === 'production') {
        return get_stylesheet_directory_uri() . '/' . $path;
    }

    return add_query_arg('time', time(),  get_stylesheet_directory_uri() . '/' . $path);
}

/**
 * Adds option 'li_class' to 'wp_nav_menu'.
 *
 * @param string  $classes String of classes.
 * @param mixed   $item The curren item.
 * @param WP_Term $args Holds the nav menu arguments.
 *
 * @return array
 */
function ttferrara_nav_menu_add_li_class($classes, $item, $args, $depth)
{
    if (isset($args->li_class)) {
        $classes[] = $args->li_class;
    }

    if (isset($args->{"li_class_$depth"})) {
        $classes[] = $args->{"li_class_$depth"};
    }

    return $classes;
}
add_filter('nav_menu_css_class', 'ttferrara_nav_menu_add_li_class', 10, 4);

/**
 * Adds option 'submenu_class' to 'wp_nav_menu'.
 *
 * @param string  $classes String of classes.
 * @param mixed   $item The current item.
 * @param WP_Term $args Holds the nav menu arguments.
 *
 * @return array
 */
function ttferrara_nav_menu_add_submenu_class($classes, $args, $depth)
{
    if (isset($args->submenu_class)) {
        $classes[] = $args->submenu_class;
    }

    if (isset($args->{"submenu_class_$depth"})) {
        $classes[] = $args->{"submenu_class_$depth"};
    }

    return $classes;
}
add_filter('nav_menu_submenu_css_class', 'ttferrara_nav_menu_add_submenu_class', 10, 3);

/**
 * Adds options to the theme customizer.
 *
 * @param WP_Customize_Manager $wp_customize The WP_Customize_Manager object.
 *
 */
function ttferrara_customize_register($wp_customize)
{

    $wp_customize->add_section('ttferrara', array(
        'title' => 'TTFerrara'
    ));

    // Front page featured image
    $wp_customize->add_setting('custom_logo_setting');
    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'custom_logo_setting', array(
        'label' => 'Logo',
        'section' => 'ttferrara',
        'mime_type' => 'image',
    )));

    // Carousel
    for ($i = 1; $i <= 10; $i++) {
        $wp_customize->add_setting('carousel[text_' . $i . ']');
        $wp_customize->add_control('carousel[text_' . $i . ']', array(
            'label' => 'Carousel Text '. $i,
            'type' => 'textfield',
            'section' => 'ttferrara',
        ));
        $wp_customize->add_setting('carousel[image_' . $i . ']');
        $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'carousel[image_' . $i . ']', array(
            'label' => 'Carousel Image ' . $i,
            'section' => 'ttferrara',
            'mime_type' => 'image'
        )));
    }

    // Corsi giovani
    $wp_customize->add_setting('front_page_courses_1_image_setting');
    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'front_page_courses_1_image_setting', array(
        'label' => 'Corsi giovani',
        'section' => 'ttferrara',
        'mime_type' => 'image',
    )));

    // Corsi amatori
    $wp_customize->add_setting('front_page_courses_2_image_setting');
    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'front_page_courses_2_image_setting', array(
        'label' => 'Corsi amatori',
        'section' => 'ttferrara',
        'mime_type' => 'image',
    )));

    // Allenamenti agonisti
    // Corsi amatori
    $wp_customize->add_setting('front_page_courses_3_image_setting');
    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'front_page_courses_3_image_setting', array(
        'label' => 'Allenamenti agonisti',
        'section' => 'ttferrara',
        'mime_type' => 'image',
    )));

    // Storia società
    $wp_customize->add_setting('storia_societa_setting');
    $wp_customize->add_control('storia_societa_setting', array(
        'label' => 'Storia società',
        'type' => 'textarea',
        'section' => 'ttferrara',
    ));

    // Squadre
    $wp_customize->add_setting('squadra_a_image_setting');
    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'squadra_a_image_setting', array(
        'label' => 'Squadra A',
        'section' => 'ttferrara',
        'mime_type' => 'image',
    )));
    $wp_customize->add_setting('squadra_b_image_setting');
    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'squadra_b_image_setting', array(
        'label' => 'Squadra B',
        'section' => 'ttferrara',
        'mime_type' => 'image',
    )));
    $wp_customize->add_setting('squadra_c_image_setting');
    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'squadra_c_image_setting', array(
        'label' => 'Squadra C',
        'section' => 'ttferrara',
        'mime_type' => 'image',
    )));
    $wp_customize->add_setting('squadra_d_image_setting');
    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'squadra_d_image_setting', array(
        'label' => 'Squadra D',
        'section' => 'ttferrara',
        'mime_type' => 'image',
    )));
    $wp_customize->add_setting('squadra_e_image_setting');
    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'squadra_e_image_setting', array(
        'label' => 'Squadra E',
        'section' => 'ttferrara',
        'mime_type' => 'image',
    )));
    $wp_customize->add_setting('squadra_f_image_setting');
    $wp_customize->add_control(new WP_Customize_Media_Control($wp_customize, 'squadra_f_image_setting', array(
        'label' => 'Squadra F',
        'section' => 'ttferrara',
        'mime_type' => 'image',
    )));
}
add_action('customize_register', 'ttferrara_customize_register');

/**
 * Limits excerpt length.
 *
 * @param string $excerpt The excerpt.
 *
 */
function ttferrara_limit_excerpt($excerpt)
{
    return substr($excerpt, 0, 200) . '...';
}
add_filter('get_the_excerpt', 'ttferrara_limit_excerpt');

/**
 * Add custom query vars.
 *
 * @param string $excerpt The excerpt.
 *
 */
function ttferrara_custom_query_vars_filter($vars)
{
    $vars[] .= 'y';
    return $vars;
}
add_filter('query_vars', 'ttferrara_custom_query_vars_filter');
