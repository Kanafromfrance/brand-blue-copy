<!-- Footer -->
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div>
                <a href="<?php echo esc_url( home_url( '/' ) ); ?>">
                    <?php if ( has_custom_logo() ) :
                        $logo_id  = get_theme_mod( 'custom_logo' );
                        $logo_url = wp_get_attachment_image_url( $logo_id, 'full' );
                    ?>
                        <img src="<?php echo esc_url( $logo_url ); ?>" alt="<?php bloginfo( 'name' ); ?>" class="footer-logo">
                    <?php else : ?>
                        <strong style="font-size:1.25rem; display:block; margin-bottom:1rem;"><?php bloginfo( 'name' ); ?></strong>
                    <?php endif; ?>
                </a>
                <p>Les experts de la conciergerie à Cannes.</p>
            </div>
            <div>
                <h4>Services</h4>
                <ul>
                    <li><a href="#services">Gestion locative</a></li>
                    <li><a href="#comment-ca-marche">Conciergerie</a></li>
                    <li><a href="#offres">Nos offres</a></li>
                    <li><a href="#secteurs">Nos secteurs</a></li>
                </ul>
            </div>
            <div>
                <h4>Navigation</h4>
                <ul>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#a-propos">À propos</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
                <div class="contact-links">
                    <a href="<?php echo esc_url( azulbay_get( 'whatsapp_url', 'https://wa.link/madr38' ) ); ?>" target="_blank" rel="noopener" class="contact-link">
                        <div class="contact-icon whatsapp">💬</div>
                        <div class="info"><p>WhatsApp</p><small>Réponse rapide</small></div>
                    </a>
                    <a href="tel:<?php echo esc_attr( azulbay_get( 'phone_number', '+33768036995' ) ); ?>" class="contact-link">
                        <div class="contact-icon phone">📞</div>
                        <div class="info"><p>Appeler</p><small><?php echo esc_html( azulbay_get( 'phone_number', '+33 7 68 03 69 95' ) ); ?></small></div>
                    </a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <span>© <?php echo date( 'Y' ); ?> <?php bloginfo( 'name' ); ?>. Tous droits réservés.</span>
            <div class="footer-bottom-links">
                <a href="#services">Services</a>
                <a href="#blog">Blog</a>
                <a href="#faq">FAQ</a>
            </div>
        </div>
    </div>
</footer>

<!-- Revenue Estimator Modal -->
<div class="modal-overlay" id="estimator-modal">
    <div class="modal">
        <button class="modal-close" onclick="closeEstimator()">&times;</button>

        <!-- Step 0: Form -->
        <div id="est-form">
            <div style="margin-bottom:1.5rem;">
                <span class="hero-badge" style="margin-bottom:0.75rem;">✨ Estimation gratuite</span>
                <h2 style="font-size:1.5rem; font-weight:700;">Combien pourrait rapporter votre logement ?</h2>
                <p class="text-muted" style="font-size:0.875rem; margin-top:0.25rem;">Estimez vos revenus en 30 secondes.</p>
            </div>
            <div class="form-group">
                <label class="form-label">📍 Adresse du bien</label>
                <input type="text" class="form-input" id="est-address" placeholder="Ex: 42 Boulevard de la Croisette, Cannes">
            </div>
            <div class="form-group">
                <label class="form-label">🛏️ Nombre de chambres</label>
                <select class="form-select" id="est-rooms">
                    <option value="">Sélectionner</option>
                    <option value="1">Studio / 1 chambre</option>
                    <option value="2">2 chambres</option>
                    <option value="3">3 chambres</option>
                    <option value="4">4 chambres</option>
                    <option value="5">5+ chambres</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">✨ État du logement</label>
                <select class="form-select" id="est-condition">
                    <option value="">Sélectionner</option>
                    <option value="neuf">Neuf / Rénové récemment</option>
                    <option value="bon">Bon état</option>
                    <option value="moyen">État moyen</option>
                    <option value="a-renover">À rénover</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">📅 Disponibilité du logement</label>
                <select class="form-select" id="est-availability">
                    <option value="">Combien de mois par an ?</option>
                    <option value="1">1 mois par an</option>
                    <option value="2">2 mois par an</option>
                    <option value="3">3 mois par an</option>
                    <option value="6">6 mois par an</option>
                    <option value="9">9 mois par an</option>
                    <option value="12">12 mois par an (toute l'année)</option>
                </select>
            </div>
            <button class="btn btn-primary" style="width:100%; justify-content:center; margin-top:1.5rem;" onclick="calculateEstimate()">
                Estimer mes revenus →
            </button>
        </div>

        <!-- Step 1: Loading -->
        <div id="est-loading" style="display:none; text-align:center; padding:3rem 0;">
            <div style="font-size:2.5rem; margin-bottom:1rem;" class="spin">⏳</div>
            <p style="font-size:1.125rem; font-weight:600;">Analyse en cours…</p>
            <p class="text-muted" style="font-size:0.875rem;">Nous calculons le potentiel de votre bien</p>
        </div>

        <!-- Step 2: Result -->
        <div id="est-result" style="display:none;">
            <div style="text-align:center; margin-bottom:1.5rem;">
                <div class="icon-box" style="margin:0 auto 1rem; width:3.5rem; height:3.5rem; border-radius:1rem;">📈</div>
                <h2 style="font-size:1.5rem; font-weight:700;">Votre estimation de revenus</h2>
                <p class="text-muted" style="font-size:0.875rem;" id="est-result-address"></p>
            </div>
            <div style="background:hsl(var(--primary)/0.05); border:1px solid hsl(var(--primary)/0.15); border-radius:1rem; padding:1.5rem; text-align:center; margin-bottom:1.5rem;">
                <p class="text-muted" style="font-size:0.875rem; font-weight:500; margin-bottom:0.5rem;">Revenus annuels estimés</p>
                <p id="est-result-range" style="font-size:2rem; font-weight:700; color:hsl(var(--primary));"></p>
                <p id="est-result-monthly" class="text-muted" style="font-size:0.75rem; margin-top:0.5rem;"></p>
            </div>
            <p class="text-muted" style="font-size:0.75rem; text-align:center; margin-bottom:1.25rem;">
                * Estimation indicative basée sur les données du marché cannois.
            </p>
            <a href="<?php echo esc_url( azulbay_get( 'iclosed_url', 'https://app.iclosed.io/e/infoprofit/appel-de-d-couverte-azulbay' ) ); ?>" target="_blank" rel="noopener" class="btn btn-primary" style="width:100%; justify-content:center;">
                Obtenir ces résultats →
            </a>
            <button class="btn btn-ghost" style="width:100%; justify-content:center; margin-top:0.5rem;" onclick="resetEstimator()">Refaire une estimation</button>
        </div>
    </div>
</div>

<?php wp_footer(); ?>
</body>
</html>
