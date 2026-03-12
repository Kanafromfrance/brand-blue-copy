<?php
/**
 * Front Page Template — AzulBay One-Page
 *
 * @package AzulBay
 */

get_header();

$whatsapp = esc_url( azulbay_get( 'whatsapp_url', 'https://wa.link/madr38' ) );
$hero_video = azulbay_get( 'hero_video_url', get_template_directory_uri() . '/assets/video/hero.mp4' );
?>

<!-- ===== HERO ===== -->
<section class="hero" id="hero">
    <div class="hero-video">
        <video src="<?php echo esc_url( $hero_video ); ?>" autoplay muted loop playsinline></video>
    </div>
    <div class="hero-content">
        <div class="hero-badge fade-up">
            <span class="pulse"></span>
            Conciergerie premium à Cannes
        </div>

        <h1 class="fade-up">
            Votre <span class="accent">maison</span> mérite de<br>
            <span class="accent"> rapporter</span>,<br>
            même sans <span class="underline-wrap">vous.<span class="underline-bar"></span></span>
        </h1>

        <p class="hero-subtitle fade-up">
            <?php echo esc_html( azulbay_get( 'hero_subtitle', 'Résidence secondaire, maison de vacances ou bien hérité — on s\'occupe de tout pour que votre logement vous rapporte, sans aucun stress.' ) ); ?>
        </p>

        <div class="fade-up">
            <button class="btn btn-primary" onclick="openEstimator()">
                Estimer mes revenus <span>→</span>
            </button>
        </div>

        <div class="hero-stats fade-up">
            <div class="hero-stat">
                <div class="hero-stat-icon">📈</div>
                <div><p class="hero-stat-value">40+</p><p class="hero-stat-label">propriétaires accompagnés</p></div>
            </div>
            <div class="hero-divider"></div>
            <div class="hero-stat">
                <div class="hero-stat-icon">🛡️</div>
                <div><p class="hero-stat-value">+33%</p><p class="hero-stat-label">de revenus en moyenne</p></div>
            </div>
            <div class="hero-divider"></div>
            <div class="hero-stat">
                <div class="hero-stat-icon">🎧</div>
                <div><p class="hero-stat-value">7j/7</p><p class="hero-stat-label">support disponible</p></div>
            </div>
            <div class="hero-divider"></div>
            <div class="hero-stat">
                <div class="hero-stat-icon">⭐</div>
                <div><p class="hero-stat-value">4.8/5</p><p class="hero-stat-label">note globale</p></div>
            </div>
        </div>

        <div class="hero-social fade-up">
            <div class="hero-avatars">
                <?php foreach ( range( 'A', 'E' ) as $letter ) : ?>
                    <div class="hero-avatar"><?php echo $letter; ?></div>
                <?php endforeach; ?>
            </div>
            <div class="hero-stars">★★★★★</div>
            <p class="hero-social-text"><strong>+40</strong> propriétaires nous font confiance</p>
        </div>
    </div>
</section>

<!-- ===== WHY ===== -->
<section id="services" class="section-padding why-section">
    <div class="container">
        <div class="section-header text-center fade-up">
            <h2>Pourquoi faire appel à <span class="text-primary">AzulBay</span> ?</h2>
            <p>Votre logement est vide une partie de l'année ? On le fait travailler pour vous, sans que vous ayez à lever le petit doigt.</p>
        </div>
        <div class="grid-4">
            <?php
            $reasons = array(
                array( '⏰', 'Gestion clé en main', 'Résidence secondaire, maison de vacances ou bien hérité — on s\'occupe de tout pendant votre absence.' ),
                array( '📈', '+33% de revenus en moyenne', 'Stratégie tarifaire, visibilité optimisée et annonces professionnelles pour rentabiliser votre logement.' ),
                array( '🛡️', 'Sérénité totale', 'Assurance, vérification des voyageurs et suivi en temps réel — votre bien est entre de bonnes mains.' ),
                array( '🎧', 'Communication 7j/7', 'Une équipe réactive pour vous tenir informé et gérer vos voyageurs à tout moment.' ),
            );
            foreach ( $reasons as $i => $r ) : ?>
                <div class="card fade-up" style="transition-delay: <?php echo $i * 0.08; ?>s">
                    <div class="icon-box"><?php echo $r[0]; ?></div>
                    <h3><?php echo esc_html( $r[1] ); ?></h3>
                    <p><?php echo esc_html( $r[2] ); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- ===== HOW IT WORKS ===== -->
<section id="comment-ca-marche" class="section-padding how-section">
    <div class="container">
        <div class="section-header text-center fade-up">
            <h2>On s'occupe <span class="italic text-primary">de tout</span></h2>
        </div>
        <div class="how-grid">
            <div class="how-left fade-up">
                <div class="icon-box">📦</div>
                <h3>Gagnez du temps</h3>
                <p>Ne perdez plus de temps avec la gestion quotidienne : entrées et sorties, ménage, linge, consommables, et relation avec les voyageurs sont entièrement pris en charge.</p>
                <a href="<?php echo $whatsapp; ?>" target="_blank" rel="noopener" class="btn btn-primary">
                    Demander un audit gratuit →
                </a>
            </div>
            <div class="how-cards">
                <?php
                $services = array(
                    array( '💬', 'Communication voyageurs', 'Réponses rapides et précises, résolution immédiate des problèmes rencontrés par vos voyageurs.', '5,0', 'Communication' ),
                    array( '🔑', 'Entrées et sorties', 'Accueil de vos voyageurs, remise des clés à leur arrivée et état des lieux au départ.', '5,0', 'Entrée' ),
                    array( '🔧', 'Maintenance', 'Prise en charge des pannes et incidents : fuites, problèmes techniques rapidement réglés.', '4,9', 'Maintenance' ),
                    array( '✨', 'Nettoyage et gestion du linge', 'Entretien complet du logement et gestion du linge après chaque séjour pour un accueil impeccable.', '4,9', 'Propreté' ),
                );
                foreach ( $services as $i => $s ) : ?>
                    <div class="card how-card fade-up" style="transition-delay: <?php echo $i * 0.08; ?>s">
                        <div class="icon-box" style="flex-shrink:0;"><?php echo $s[0]; ?></div>
                        <div>
                            <h4><?php echo esc_html( $s[1] ); ?></h4>
                            <p><?php echo esc_html( $s[2] ); ?></p>
                            <div class="rating">★ <?php echo $s[3]; ?> <span>(Note Airbnb) · <?php echo $s[4]; ?></span></div>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>

<!-- ===== OFFRES ===== -->
<section id="offres" class="section-padding">
    <div class="container-md">
        <div class="section-header text-center fade-up">
            <h2>L'offre <span class="italic text-primary">intégrale</span></h2>
            <p style="font-size:1.125rem; font-weight:600; color:hsl(var(--foreground)); margin-bottom:0.5rem;">Gestion & Prestige</p>
            <p>Délégation totale. Standard hôtelier. Rendement optimisé.</p>
        </div>

        <div class="offres-card fade-up">
            <div class="offres-badge">20 % de commission unique</div>

            <?php
            $included = array(
                array( '📦', 'La Simplification Totale', array(
                    'Gestion Opérationnelle A à Z : Prise en charge intégrale des arrivées, départs, ménage hôtelier de précision et gestion du linge.',
                    'Valorisation Premium : Audit home staging, shooting photo professionnel et vidéo de présentation.',
                    'Standard Excellence : Blanchisserie de qualité supérieure et conciergerie dédiée pour garantir des avis 5 étoiles.',
                    'Maintenance Proactive : Gestion des petits dépannages et audits techniques réguliers.',
                )),
                array( '📈', 'Performance Maximale', array(
                    'Pilotage Stratégique : Ajustement quotidien et manuel des tarifs pour capter la haute rentabilité.',
                    'Upsells Partagés : Services additionnels dont vous percevez 10 % des revenus générés.',
                    'Référencement Expert : Optimisation continue de l\'annonce pour dominer les algorithmes.',
                )),
                array( '🛡️', 'Sérénité Totale', array(
                    'Protection du Bien : Filtrage strict des profils voyageurs et gestion intégrale des cautions et litiges.',
                    'Suivi en Direct : Accès transparent à votre calendrier et rapports de performance mensuels.',
                )),
            );
            foreach ( $included as $section ) : ?>
                <div style="margin-bottom:2rem; margin-top:1rem;">
                    <div class="offres-category">
                        <div class="offres-category-icon"><?php echo $section[0]; ?></div>
                        <span class="offres-category-title"><?php echo esc_html( $section[1] ); ?></span>
                    </div>
                    <ul class="offres-list">
                        <?php foreach ( $section[2] as $item ) : ?>
                            <li class="offres-item"><span class="check">✓</span> <?php echo esc_html( $item ); ?></li>
                        <?php endforeach; ?>
                    </ul>
                </div>
            <?php endforeach; ?>

            <hr class="offres-divider">

            <div style="margin-bottom:2rem;">
                <p class="offres-excluded-title">Ce qui n'est pas inclus</p>
                <ul>
                    <?php
                    $excluded = array(
                        'Gros Travaux : Rénovations majeures nécessitant un maître d\'œuvre.',
                        'Achats Déco : Le coût du mobilier suggéré reste à la charge du propriétaire.',
                        'Frais Fixes Propriétaire : Assurances PNO et taxes de séjour.',
                    );
                    foreach ( $excluded as $item ) : ?>
                        <li class="offres-item"><span class="cross">✕</span> <span style="color:hsl(var(--muted-foreground));"><?php echo esc_html( $item ); ?></span></li>
                    <?php endforeach; ?>
                </ul>
            </div>

            <div class="offres-tarifs">
                <div class="offres-tarifs-header">
                    <span style="color:hsl(var(--primary));">💰</span>
                    <span>Les Tarifs</span>
                </div>
                <ul style="margin-left:1.5rem;">
                    <li class="offres-item"><span class="check">✓</span> Commission Unique : 20 % sur le revenu locatif net.</li>
                    <li class="offres-item"><span class="check">✓</span> Frais de Ménage : Intégralement à la charge des voyageurs.</li>
                    <li class="offres-item"><span class="check">✓</span> Frais de mise en place : Offerts.</li>
                </ul>
            </div>

            <a href="<?php echo $whatsapp; ?>" target="_blank" rel="noopener" class="btn btn-primary" style="width:100%; justify-content:center;">
                Choisir cette offre →
            </a>
        </div>
    </div>
</section>

<!-- ===== SECTORS ===== -->
<section id="secteurs" class="section-padding sectors-section">
    <div class="container">
        <div class="section-header text-center fade-up">
            <h2>Nos <span class="italic text-primary">secteurs</span></h2>
            <p>Experts de Cannes et ses environs — quel que soit votre type de bien, nous avons l'expertise pour le gérer.</p>
        </div>
        <div class="grid-4">
            <?php
            $sectors = array(
                array( '🏠', 'Appartements', 'Studios, T2, T3… en centre-ville ou en périphérie.' ),
                array( '🏢', 'Maisons', 'Maisons de ville, pavillons, propriétés avec jardin.' ),
                array( '🏰', 'Biens de prestige', 'Villas, châteaux, propriétés d\'exception.' ),
                array( '🌴', 'Locations vacances', 'Résidences secondaires, gîtes et biens saisonniers.' ),
            );
            foreach ( $sectors as $i => $s ) : ?>
                <div class="card sector-card fade-up" style="transition-delay: <?php echo $i * 0.08; ?>s; padding:1.25rem 2rem;">
                    <div class="sector-icon"><?php echo $s[0]; ?></div>
                    <h3><?php echo esc_html( $s[1] ); ?></h3>
                    <p><?php echo esc_html( $s[2] ); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- ===== ABOUT ===== -->
<section id="a-propos" class="section-padding">
    <div class="container">
        <div class="about-grid">
            <div class="fade-up">
                <div class="about-image-wrap">
                    <?php
                    $team_img = get_template_directory_uri() . '/assets/images/team.jpg';
                    ?>
                    <img src="<?php echo esc_url( $team_img ); ?>" alt="L'équipe AzulBay" class="about-image">
                    <div class="about-badge">
                        <p class="big">5 ans</p>
                        <p class="small">d'expérience</p>
                    </div>
                </div>
            </div>
            <div class="fade-up">
                <h2 style="font-size:1.875rem; font-weight:700; margin-bottom:1rem;">
                    Qui sommes <span class="italic text-primary">nous</span> ?
                </h2>
                <p class="text-muted" style="margin-bottom:1rem; line-height:1.7;">
                    AzulBay est née d'un constat simple : trop de propriétaires laissent leur résidence secondaire ou leur bien de vacances dormir une grande partie de l'année. Notre équipe transforme ces logements en sources de revenus, sans aucun effort de votre part.
                </p>
                <p class="text-muted" style="font-size:0.875rem; margin-bottom:1.5rem;">
                    Basés exclusivement à Cannes, nous connaissons chaque quartier, chaque événement, chaque opportunité pour maximiser vos revenus.
                </p>
                <div class="about-stats">
                    <div class="about-stat"><p class="value">🎯</p><p class="label">Expert de Cannes</p></div>
                    <div class="about-stat"><p class="value">40+</p><p class="label">Propriétaires satisfaits</p></div>
                    <div class="about-stat"><p class="value">4.8/5</p><p class="label">Note moyenne</p></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ===== TESTIMONIALS ===== -->
<section class="section-padding testimonials-section">
    <div class="container">
        <div class="section-header text-center fade-up">
            <h2>Des voyageurs <span class="italic text-primary">satisfaits</span></h2>
        </div>
        <div class="testimonials-grid">
            <?php
            $testimonials = array(
                array( 'Marie L.', 'AzulBay a transformé ma location. Revenus doublés en 3 mois, et je ne m\'occupe plus de rien !', 5 ),
                array( 'Thomas D.', 'Équipe réactive et professionnelle. Mes voyageurs sont ravis et moi aussi.', 5 ),
                array( 'Sophie M.', 'Le service de conciergerie parfait. Transparent, efficace et rentable.', 5 ),
            );
            foreach ( $testimonials as $i => $t ) : ?>
                <div class="card fade-up" style="transition-delay: <?php echo $i * 0.08; ?>s">
                    <div class="testimonial-stars"><?php echo str_repeat( '★', $t[2] ); ?></div>
                    <p class="testimonial-text">"<?php echo esc_html( $t[1] ); ?>"</p>
                    <p class="testimonial-name"><?php echo esc_html( $t[0] ); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- ===== BLOG ===== -->
<section id="blog" class="section-padding">
    <div class="container">
        <div class="section-header text-center fade-up">
            <h2>Notre <span class="italic text-primary">blog</span></h2>
            <p>Conseils, actualités et guides pour les propriétaires à Cannes.</p>
        </div>
        <div class="blog-grid">
            <?php
            $blog_query = new WP_Query( array(
                'posts_per_page' => 3,
                'post_status'    => 'publish',
            ));

            if ( $blog_query->have_posts() ) :
                $i = 0;
                while ( $blog_query->have_posts() ) : $blog_query->the_post();
                    $tag = '';
                    $tags = get_the_tags();
                    if ( $tags ) $tag = $tags[0]->name;
            ?>
                <a href="<?php the_permalink(); ?>" class="card blog-card fade-up" style="transition-delay: <?php echo $i * 0.08; ?>s; padding:0;">
                    <div class="blog-card-image">
                        <?php if ( has_post_thumbnail() ) : ?>
                            <?php the_post_thumbnail( 'medium_large' ); ?>
                        <?php else : ?>
                            <span class="placeholder">📝</span>
                        <?php endif; ?>
                    </div>
                    <div class="blog-card-body">
                        <div class="blog-meta">
                            <?php if ( $tag ) : ?>
                                <span class="blog-tag">🏷️ <?php echo esc_html( $tag ); ?></span>
                            <?php endif; ?>
                            <span class="blog-date">📅 <?php echo get_the_date( 'j M Y' ); ?></span>
                        </div>
                        <h3><?php the_title(); ?></h3>
                        <p class="excerpt"><?php echo wp_trim_words( get_the_excerpt(), 18 ); ?></p>
                        <span class="read-more">Lire l'article →</span>
                    </div>
                </a>
            <?php
                    $i++;
                endwhile;
                wp_reset_postdata();
            else :
                // Fallback articles
                $fallback = array(
                    array( 'Comment maximiser vos revenus Airbnb à Cannes', 'Découvrez nos stratégies pour optimiser votre annonce.', '15 Fév 2026', 'Revenus' ),
                    array( 'Réglementation location courte durée à Cannes', 'Tout ce que vous devez savoir sur la réglementation.', '8 Fév 2026', 'Réglementation' ),
                    array( 'Les 5 erreurs à éviter sur Airbnb', 'Évitez les pièges classiques de la location saisonnière.', '1 Fév 2026', 'Conseils' ),
                );
                foreach ( $fallback as $i => $a ) : ?>
                    <div class="card blog-card fade-up" style="transition-delay: <?php echo $i * 0.08; ?>s; padding:0;">
                        <div class="blog-card-image"><span class="placeholder">📝</span></div>
                        <div class="blog-card-body">
                            <div class="blog-meta">
                                <span class="blog-tag">🏷️ <?php echo $a[3]; ?></span>
                                <span class="blog-date">📅 <?php echo $a[2]; ?></span>
                            </div>
                            <h3><?php echo esc_html( $a[0] ); ?></h3>
                            <p class="excerpt"><?php echo esc_html( $a[1] ); ?></p>
                            <span class="read-more">Lire l'article →</span>
                        </div>
                    </div>
                <?php endforeach;
            endif; ?>
        </div>
    </div>
</section>

<!-- ===== FAQ ===== -->
<section id="faq" class="section-padding">
    <div class="container-sm">
        <div class="section-header text-center fade-up">
            <h2>FAQ</h2>
            <p>Les réponses à vos questions les plus fréquentes.</p>
        </div>
        <?php
        $faqs = array(
            array( 'Quels sont vos tarifs ?', 'Nous prenons une commission unique de 20 % sur les revenus locatifs générés. Pas de frais cachés, pas d\'abonnement.' ),
            array( 'Je peux utiliser ma maison quand je veux ?', 'Absolument ! C\'est votre logement. Bloquez vos dates en un clic. Vous gardez le contrôle total.' ),
            array( 'Mon logement est vide seulement quelques mois, ça vaut le coup ?', 'Oui, même 2 à 3 mois par an peuvent générer des revenus significatifs à Cannes.' ),
            array( 'Comment sont sélectionnés les voyageurs ?', 'Nous vérifions l\'identité et les avis de chaque voyageur. Nous privilégions les profils B2B et familles.' ),
            array( 'Que comprend le service de ménage ?', 'Nettoyage complet entre chaque voyageur, fourniture du linge de maison hôtelier, vérification de l\'inventaire.' ),
            array( 'J\'ai hérité d\'un bien, comment commencer ?', 'On vous accompagne de A à Z : audit du logement, shooting photo, mise en ligne et gestion complète.' ),
        );
        foreach ( $faqs as $i => $f ) : ?>
            <div class="faq-item fade-up" style="transition-delay: <?php echo $i * 0.06; ?>s">
                <button class="faq-question" onclick="toggleFaq(this)">
                    <?php echo esc_html( $f[0] ); ?>
                    <span class="chevron">▼</span>
                </button>
                <div class="faq-answer"><?php echo esc_html( $f[1] ); ?></div>
            </div>
        <?php endforeach; ?>
    </div>
</section>

<?php get_footer(); ?>
