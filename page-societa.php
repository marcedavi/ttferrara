<?php get_header(); ?>

<section class="container">
    <div class="image-overlay w-full h-40 sm:h-64 md:h-80 lg:h-96">
            <?php echo wp_get_attachment_image(get_theme_mod('carousel')['image_1'], 'ttferrara_large', false, array(
                'class' => 'object-cover h-full'
            )); ?>
        <div class="dark-overlay"></div>
    </div>    
</div>

<section class="container">
    <h2>Organigramma</h2>
    <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 md:gap-x-8 xl:gap-x-32 gap-y-8 text-center mt-12">
        <div>
            <h3 class="mb-4">Consiglio Direttivo</h3>
            <div class="flex justify-between text-sm sm:text-lg">
                <p class="font-medium">Presidente:</p>
                <p>Enrico Mugellini</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p class="font-medium">Vice Presidente:</p>
                <p>Simone Gallerani</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p class="font-medium">Segretario:</p>
                <p>Luca Antonucci</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p class="font-medium">Consigliere:</p>
                <p>Sergio Curarati</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p class="font-medium">Consigliere:</p>
                <p>Guido Caravita</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p class="font-medium">Presidente Onorario:</p>
                <p>Giorgio Quartaroli</p>
            </div>
        </div>
        <div>
            <h3 class="mb-4">Responsabili Settori Gestionali</h3>
            <div class="flex justify-between text-sm sm:text-lg">
                <p class="font-medium">Contabilità:</p>
                <p>Enrico Mugellini</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p class="font-medium">Enti Locali e Manutenzione:</p>
                <p>Paolo Bianchetti</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p class="font-medium">Sito Internet e Social Media:</p>
                <p>Marcello Davi</p>
            </div>
        </div>
        <div>
            <h3 class="mb-4">Tecnici</h3>
            <div class="flex justify-between text-sm sm:text-lg">
                <p class="font-medium">Capo Tecnico:</p>
                <p>Maurizio Buzzone</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p class="font-medium">Vice Tecnico Regionale:</p>
                <p>Alessandro Andreoli</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p class="font-medium">Tecnico:</p>
                <p>Paolo Bianchetti</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p class="font-medium">Tecnico:</p>
                <p>Luca Antonucci</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p class="font-medium">Tecnico:</p>
                <p>Enrico Mugellini</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p class="font-medium">Tecnico:</p>
                <p>Sergio Curarati</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p class="font-medium">Tecnico:</p>
                <p>Guido Caravita</p>
            </div>
        </div>
        <div>
            <h3 class="mb-4">Atleti abilitati all'uso del defibrillatore</h3>
            <div class="flex justify-between text-sm sm:text-lg">
                <p>Claudio Sfrisi</p>
                <p>Alessandro Andreoli</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p>Guido Caravita</p>
                <p>Massimo Fratti</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p>Enrico Mugellini</p>
                <p>Simone Gallerani</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p>Sergio Curarati</p>
                <p>Luca Antonucci</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p>Maurizio Buzzone</p>
                <p>Paolo Bianchetti</p>
            </div>
            <div class="flex justify-between text-sm sm:text-lg">
                <p>Claudio Polloni</p>
                <p>Giulio Sani</p>
            </div>
        </div>
    </div>
</section>

<section class="container">
    <h2>Storia</h2>
    <?php echo get_theme_mod('storia_societa_setting'); ?>
</section>
    
<?php
get_footer();
