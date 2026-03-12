<?php
/**
 * Index Template — fallback for blog listing
 *
 * @package AzulBay
 */

get_header();
?>

<div style="padding-top:5rem;">
    <div class="container" style="padding-top:3rem; padding-bottom:3rem;">
        <h1 style="font-size:2.5rem; font-weight:700; margin-bottom:2rem; text-align:center;">Blog</h1>

        <?php if ( have_posts() ) : ?>
            <div class="blog-grid">
                <?php while ( have_posts() ) : the_post(); ?>
                    <a href="<?php the_permalink(); ?>" class="card blog-card" style="padding:0;">
                        <div class="blog-card-image">
                            <?php if ( has_post_thumbnail() ) : ?>
                                <?php the_post_thumbnail( 'medium_large' ); ?>
                            <?php else : ?>
                                <span class="placeholder">📝</span>
                            <?php endif; ?>
                        </div>
                        <div class="blog-card-body">
                            <div class="blog-meta">
                                <span class="blog-date">📅 <?php echo get_the_date( 'j M Y' ); ?></span>
                            </div>
                            <h3><?php the_title(); ?></h3>
                            <p class="excerpt"><?php echo wp_trim_words( get_the_excerpt(), 20 ); ?></p>
                            <span class="read-more">Lire l'article →</span>
                        </div>
                    </a>
                <?php endwhile; ?>
            </div>

            <div style="text-align:center; margin-top:2rem;">
                <?php the_posts_pagination( array(
                    'mid_size'  => 2,
                    'prev_text' => '← Précédent',
                    'next_text' => 'Suivant →',
                )); ?>
            </div>
        <?php else : ?>
            <p class="text-center text-muted">Aucun article pour le moment.</p>
        <?php endif; ?>
    </div>
</div>

<?php get_footer(); ?>
