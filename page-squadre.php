<?php get_header(); ?>

<section class="container mb-8">
    <h1 class="text-3xl uppercase font-bold text-center mb-2">Squadre</h1>

    <div class="image-and-text-left">
        <div>
            <h3>ASDTT Ferrara A</h3>
            <h4 class="mb-4">Serie B2 Girone C</h4>
            <p>Tommaso Seidenari</p>
            <p>Andrea D'Amore</p>
            <p>Maurizio Buzzone</p>
            <p>Guido Caravita</p>
        </div>
        <?php echo wp_get_attachment_image(get_theme_mod('squadra_a_image_setting'), 'ttferrara_large'); ?>
    </div>

    <div class="image-and-text-right">
        <?php echo wp_get_attachment_image(get_theme_mod('squadra_b_image_setting'), 'ttferrara_large'); ?>
        <div>
            <h3>ASDTT Ferrara B</h3>
            <h4 class="mb-4">Serie C1 Girone G</h4>
            <p>Sergio Curarati</p>
            <p>Giulio Sani</p>
            <p>Simone Gallerani</p>
        </div>
    </div>

    <div class="image-and-text-left">
        <div>
            <h3>ASDTT Ferrara C</h3>
            <h4 class="mb-4">Serie C2 Girone B</h4>
            <p>Luca Antonucci</p>
            <p>Enrico Mugellini</p>
            <p>Silvia Traversi</p>
            <p>Gianfabrizio Musacchia</p>
        </div>
        <?php echo wp_get_attachment_image(get_theme_mod('squadra_c_image_setting'), 'ttferrara_large'); ?>
    </div>

    <div class="image-and-text-right">
        <?php echo wp_get_attachment_image(get_theme_mod('squadra_d_image_setting'), 'ttferrara_large'); ?>
        <div>
            <h3>ASDTT Ferrara D</h3>
            <h4 class="mb-4">Serie D1 Girone B</h4>
            <p>Alessandro Andreoli</p>
            <p>Paolo Bianchetti</p>
            <p>Pietro Andreoli</p>
            <p>Stefano Zorzan</p>
            <p>Lorenzo Blasi</p>
        </div>
    </div>

    <div class="image-and-text-left">
        <div>
            <h3>ASDTT Ferrara E</h3>
            <h4 class="mb-4">Serie D2 Girone C</h4>
            <p>Andrea Bonora</p>
            <p>Claudio Polloni</p>
            <p>Marcello Davi</p>
            <p>Massimo Scalorbi</p>
            <p>Claudio Sfrisi</p>
        </div>
        <?php echo wp_get_attachment_image(get_theme_mod('squadra_e_image_setting'), 'ttferrara_large'); ?>
    </div>

    <div class="image-and-text-right">
        <?php echo wp_get_attachment_image(get_theme_mod('squadra_f_image_setting'), 'ttferrara_large'); ?>
        <div>
            <h3>ASDTT Ferrara F</h3>
            <h4 class="mb-4">Serie D2 Girone D</h4>
            <p>Simone Tumiati</p>
            <p>Leonardo Lombardi</p>
            <p>Alessio Giuliani</p>
            <p>Filippo Azzolina</p>
            <p>Corrado Gangarella</p>
        </div>
    </div>
</section>

<?php
get_footer();
