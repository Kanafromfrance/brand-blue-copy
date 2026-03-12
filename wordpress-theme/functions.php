<?php
/**
 * AzulBay Theme Functions
 *
 * @package AzulBay
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/* ---------- Theme Setup ---------- */
function azulbay_setup() {
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );
    add_theme_support( 'custom-logo', array(
        'height'      => 48,
        'width'       => 200,
        'flex-width'  => true,
        'flex-height' => true,
    ));
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption' ) );

    register_nav_menus( array(
        'primary' => __( 'Menu principal', 'azulbay' ),
        'footer'  => __( 'Menu footer', 'azulbay' ),
    ));
}
add_action( 'after_setup_theme', 'azulbay_setup' );

/* ---------- Enqueue Styles & Scripts ---------- */
function azulbay_enqueue() {
    // Google Fonts
    wp_enqueue_style(
        'azulbay-fonts',
        'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'azulbay-style',
        get_stylesheet_uri(),
        array( 'azulbay-fonts' ),
        wp_get_theme()->get( 'Version' )
    );

    // Main script
    wp_enqueue_script(
        'azulbay-script',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        wp_get_theme()->get( 'Version' ),
        true
    );

    // Pass data to JS
    wp_localize_script( 'azulbay-script', 'azulbayData', array(
        'ajaxUrl'   => admin_url( 'admin-ajax.php' ),
        'nonce'     => wp_create_nonce( 'azulbay_nonce' ),
        'themeUrl'  => get_template_directory_uri(),
    ));
}
add_action( 'wp_enqueue_scripts', 'azulbay_enqueue' );

/* ---------- Customizer ---------- */
function azulbay_customize_register( $wp_customize ) {

    // ── Section : Héro
    $wp_customize->add_section( 'azulbay_hero', array(
        'title'    => __( 'Hero / En-tête', 'azulbay' ),
        'priority' => 30,
    ));

    // Hero video URL
    $wp_customize->add_setting( 'hero_video_url', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'hero_video_url', array(
        'label'   => __( 'URL de la vidéo hero (MP4)', 'azulbay' ),
        'section' => 'azulbay_hero',
        'type'    => 'url',
    ));

    // Hero title
    $wp_customize->add_setting( 'hero_title', array(
        'default'           => 'Votre <em>maison</em> mérite de <em>rapporter</em>, même sans vous.',
        'sanitize_callback' => 'wp_kses_post',
    ));
    $wp_customize->add_control( 'hero_title', array(
        'label'   => __( 'Titre Hero (HTML autorisé)', 'azulbay' ),
        'section' => 'azulbay_hero',
        'type'    => 'textarea',
    ));

    // Hero subtitle
    $wp_customize->add_setting( 'hero_subtitle', array(
        'default'           => 'Résidence secondaire, maison de vacances ou bien hérité — on s\'occupe de tout pour que votre logement vous rapporte, sans aucun stress.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ));
    $wp_customize->add_control( 'hero_subtitle', array(
        'label'   => __( 'Sous-titre Hero', 'azulbay' ),
        'section' => 'azulbay_hero',
        'type'    => 'textarea',
    ));

    // ── Section : Contact
    $wp_customize->add_section( 'azulbay_contact', array(
        'title'    => __( 'Contact', 'azulbay' ),
        'priority' => 35,
    ));

    $wp_customize->add_setting( 'whatsapp_url', array(
        'default'           => 'https://wa.link/madr38',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'whatsapp_url', array(
        'label'   => __( 'Lien WhatsApp', 'azulbay' ),
        'section' => 'azulbay_contact',
        'type'    => 'url',
    ));

    $wp_customize->add_setting( 'phone_number', array(
        'default'           => '+33768036995',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    $wp_customize->add_control( 'phone_number', array(
        'label'   => __( 'Numéro de téléphone', 'azulbay' ),
        'section' => 'azulbay_contact',
        'type'    => 'text',
    ));

    // ── Section : iClosed
    $wp_customize->add_section( 'azulbay_booking', array(
        'title'    => __( 'Prise de rendez-vous', 'azulbay' ),
        'priority' => 36,
    ));

    $wp_customize->add_setting( 'iclosed_url', array(
        'default'           => 'https://app.iclosed.io/e/infoprofit/appel-de-d-couverte-azulbay',
        'sanitize_callback' => 'esc_url_raw',
    ));
    $wp_customize->add_control( 'iclosed_url', array(
        'label'   => __( 'URL iClosed widget', 'azulbay' ),
        'section' => 'azulbay_booking',
        'type'    => 'url',
    ));
}
add_action( 'customize_register', 'azulbay_customize_register' );

/* ---------- Helper: get customizer value ---------- */
function azulbay_get( $key, $default = '' ) {
    return get_theme_mod( $key, $default );
}
