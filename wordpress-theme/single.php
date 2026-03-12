<?php
/**
 * Single Post Template
 *
 * @package AzulBay
 */

get_header();
?>

<div style="padding-top:5rem;">
    <article class="container-sm" style="padding-top:3rem; padding-bottom:3rem;">
        <?php while ( have_posts() ) : the_post(); ?>

            <?php if ( has_post_thumbnail() ) : ?>
                <div style="border-radius:1.5rem; overflow:hidden; margin-bottom:2rem;">
                    <?php the_post_thumbnail( 'large', array( 'style' => 'width:100%; height:auto; display:block;' ) ); ?>
                </div>
            <?php endif; ?>

            <div class="blog-meta" style="margin-bottom:1rem;">
                <?php
                $tags = get_the_tags();
                if ( $tags ) : ?>
                    <span class="blog-tag">🏷️ <?php echo esc_html( $tags[0]->name ); ?></span>
                <?php endif; ?>
                <span class="blog-date">📅 <?php echo get_the_date( 'j M Y' ); ?></span>
            </div>

            <h1 style="font-size:2rem; font-weight:700; margin-bottom:1.5rem; line-height:1.2;">
                <?php the_title(); ?>
            </h1>

            <div style="color:hsl(var(--muted-foreground)); font-size:0.9375rem; line-height:1.8;">
                <?php the_content(); ?>
            </div>

            <div style="margin-top:3rem; padding-top:1.5rem; border-top:1px solid hsl(var(--border));">
                <a href="<?php echo esc_url( home_url( '/#blog' ) ); ?>" style="color:hsl(var(--primary)); font-weight:600; font-size:0.875rem;">
                    ← Retour au blog
                </a>
            </div>

        <?php endwhile; ?>
    </article>
</div>

<?php get_footer(); ?>
