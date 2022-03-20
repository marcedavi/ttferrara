<?php get_header(); ?>

<section>
    <!-- Carousel -->
    <div class="swiper w-full">
        <div class="swiper-wrapper">
            <?php
            $slides =  get_theme_mod('carousel', array());
            for ($i = 1; $i <= count($slides) / 2; $i++) :
                $image_id = $slides['image_' . $i];
                $link = get_permalink($slides['page_' . $i]);
                $text = $slides['text_' . $i];
                if (is_null($image_id)) continue; ?>

                <div class="swiper-slide">
                    <div class="container">
                        <a href="<?php echo $link; ?>">
                            <div class="image-overlay shadow-xl">
                                <?php echo wp_get_attachment_image($image_id, 'ttferrara_large'); ?>

                                <div class="dark-overlay"></div>

                                <div class="text-overlay">
                                    <p><?php echo $text; ?></p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            <?php endfor; ?>
        </div>

        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</section>

<section class="container">
    <h2>Prossimi incontri</h2>

    <div class="overflow-x-auto">
        <table id="next-matches-table" class="table-auto mx-auto">
            <thead>
                <tr>
                    <th>Serie</th>
                    <th>Di casa</th>
                    <th>Ospiti</th>
                    <th>Data e ora</th>
                </tr>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    </div>
</section>

<!-- News -->
<section class="container">
    <h2>Ultime Notizie</h2>

    <div class="flex flex-col gap-y-4">
        <?php

        $query = new WP_Query(array(
            'post_type' => 'post',
            'post_status' => 'publish',
            'posts_per_page' => 5,
            'tag__not_in' => array( 26 )
        ));

        if ($query->have_posts()) :
            while ($query->have_posts()) :
                $query->the_post();

                get_template_part('template-parts/content', 'preview');
            endwhile;
        endif;
        ?>
    </div>

    <div class="flex justify-center text-xl font-semibold mt-8">
        <a href="<?php echo get_permalink(get_page_by_path('notizie')); ?>" class="link"><p>Vai all'archivio</p></a>
    </div>
</section>

<?php
get_footer();
