<?php get_header(); ?>

<section class="container mb-8">
    <h2>Corsi e Allenamenti</h1>

    <div class="image-and-text-left">
        <div>
            <h3>Giovani</h3>
            <p>Per avvicinare bambini e ragazzi a questo bellissimo sport.<br/>Tenuti dal tecnico Maurizio Buzzone il <span class="text-red-800">Lunedì</span> e il <span class="text-red-800">Mercoledì</span> dalle <span class="text-red-800">17:00</span> alle <span class="text-red-800">18:30</span> e dalle <span class="text-red-800">18:30</span> alle <span class="text-red-800">20:00</span>.</p>
        </div>
        <?php echo wp_get_attachment_image(get_theme_mod('front_page_courses_1_image_setting'), 'ttferrara_large'); ?>
    </div>

    <div class="image-and-text-right">
        <?php echo wp_get_attachment_image(get_theme_mod('front_page_courses_2_image_setting'), 'ttferrara_large'); ?>
        <div>
            <h3>Amatori</h3>
            <p>Dedicati agli adulti che voglio imparare o rispolverare il Tennis Tavolo. Sempre seguiti dal tecnico Maurizio Buzzone il <span class="text-red-800">Lunedì</span> e il <span class="text-red-800">Mercoledì</span> dalle <span class="text-red-800">20:00</span> alle <span class="text-red-800">21:30</span>.</p>
        </div>
    </div>

    <div class="image-and-text-left">
        <div>
            <h3>Agonisti</h3>
            <p>Allenamenti in autonomia per gli atleti che svolgono attività agonistica.<br/>Il <span class="text-red-800">Lunedì</span>, il <span class="text-red-800">Mercoledì</span>, il <span class="text-red-800">Giovedì</span> e il <span class="text-red-800">Venerdì</span> dalle <span class="text-red-800">17:30</span> alle <span class="text-red-800">19:00</span> e dalle <span class="text-red-800">19:15</span> alle <span class="text-red-800">20:45</span>.</p>
        </div>
        <?php echo wp_get_attachment_image(get_theme_mod('front_page_courses_3_image_setting'), 'ttferrara_large'); ?>
    </div>
</section>

<?php
get_footer();
