<?php get_header(); ?>

<section class="container">
    <?php 
    $year = get_query_var('y', date("Y"));

    $query = new WP_Query(array(
        'post_type' => 'post',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'year' => $year,
        'tag' => 'stampa'
    )); ?>
    
    <h1 class="text-4xl w-full font-bold text-center uppercase">Stampa <?php echo $year; ?></h1>

    <div class="grid grid-cols-6 md:grid-cols-12 gap-y-4 grid-flow-row mt-8 text-center">
        <?php for($i = date("Y"); $i >= 2022; $i--): ?>
            <a href="<?php echo get_permalink() . '?y=' . $i;?>" class="box-border"><span class="text-lg <?php echo $i == $year ? 'border-b-4 border-red-800 font-bold text-xl' : '';  ?>"><?php echo $i; ?></span></a>
        <?php endfor; ?>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 md:gap-x-8 xl:gap-x-32 gap-y-8 text-center mt-16">
        <?php if($query->have_posts()):
                    $query->the_post();
                    
                    the_content();
                    
            endif; ?>
    </div>

</section>

<?php
get_footer();