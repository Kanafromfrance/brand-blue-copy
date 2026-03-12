<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="AzulBay — Conciergerie Airbnb premium à Cannes. Gestion locative clé en main, +33% de revenus en moyenne.">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- Navbar -->
<nav class="navbar" id="navbar">
    <div class="navbar-inner">
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
            <?php if ( has_custom_logo() ) :
                $logo_id  = get_theme_mod( 'custom_logo' );
                $logo_url = wp_get_attachment_image_url( $logo_id, 'full' );
            ?>
                <img src="<?php echo esc_url( $logo_url ); ?>" alt="<?php bloginfo( 'name' ); ?>" class="navbar-logo">
            <?php else : ?>
                <strong style="font-size:1.25rem;"><?php bloginfo( 'name' ); ?></strong>
            <?php endif; ?>
        </a>

        <div class="navbar-links">
            <a href="#services">Services</a>
            <a href="#comment-ca-marche">Comment ça marche</a>
            <a href="#offres">Offres</a>
            <a href="#secteurs">Secteurs</a>
            <a href="#blog">Blog</a>
            <a href="#faq">FAQ</a>
        </div>

        <div class="navbar-cta">
            <button class="btn btn-primary btn-sm" onclick="openEstimator()">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
                Estimer mes revenus
            </button>
        </div>

        <button class="mobile-toggle" onclick="toggleMobileMenu()" aria-label="Menu">
            <svg id="menu-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            <svg id="close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:none"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
    </div>

    <div class="mobile-menu" id="mobile-menu">
        <a href="#services" onclick="closeMobileMenu()">Services</a>
        <a href="#comment-ca-marche" onclick="closeMobileMenu()">Comment ça marche</a>
        <a href="#offres" onclick="closeMobileMenu()">Offres</a>
        <a href="#secteurs" onclick="closeMobileMenu()">Secteurs</a>
        <a href="#blog" onclick="closeMobileMenu()">Blog</a>
        <a href="#faq" onclick="closeMobileMenu()">FAQ</a>
        <div style="margin-top:0.5rem;">
            <button class="btn btn-primary" onclick="openEstimator(); closeMobileMenu();">Estimer mes revenus →</button>
        </div>
    </div>
</nav>
