<?php get_header(); ?>

<section class="container">
    <?php 
    $year = get_query_var('y', date("Y"));

    $query = new WP_Query(array(
        'post_type' => 'attachment',
        'post_status' => 'inherit',
        'posts_per_page' => -1,
        'year' => $year
    )); ?>
    
    <h1 class="text-4xl w-full font-bold text-center uppercase">Gallery <?php echo $year; ?></h1>

    <div class="grid grid-cols-6 md:grid-cols-12 gap-y-4 grid-flow-row mt-8 text-center">
        <?php for($i = date("Y"); $i >= 2005; $i--): ?>
            <a href="<?php echo get_permalink() . '?y=' . $i;?>" class="box-border"><span class="text-lg <?php echo $i == $year ? 'border-b-4 border-red-800 font-bold text-xl' : '';  ?>"><?php echo $i; ?></span></a>
        <?php endfor; ?>
    </div>

    <div id="gallery" class="w-full mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <?php if($query->have_posts()):
                while($query->have_posts()):
                    $query->the_post(); ?>
                    
                    <div>
                        <a href="<?php echo wp_get_attachment_image_url(get_the_ID(), 'ttferrara_large'); ?>">
                            <img src="<?php echo wp_get_attachment_image_url(get_the_ID(), 'medium'); ?>" class="rounded-lg shadow-lg" />
                        </a>
                    </div>
                    
            <?php endwhile;
            endif; ?>
    </div>

</section>

<?php
get_footer();
