<?php get_header(); ?>

<section class="container">
    <?php 
    $year = get_query_var('y', date("Y"));

    $query = new WP_Query(array(
        'post_type' => 'post',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'year' => $year
    )); ?>
    
    <h1 class="text-4xl w-full font-bold text-center uppercase">Notizie <?php echo $year; ?></h1>

    <div class="grid grid-cols-6 md:grid-cols-12 gap-y-4 grid-flow-row mt-8 text-center">
        <?php for($i = date("Y"); $i >= 2005; $i--): ?>
            <a href="<?php echo get_permalink() . '?y=' . $i;?>" class="box-border"><span class="text-lg <?php echo $i == $year ? 'border-b-4 border-red-800 font-bold text-xl' : '';  ?>"><?php echo $i; ?></span></a>
        <?php endfor; ?>
    </div>

    <div class="w-full flex flex-col gap-y-8 mt-16">
        <?php if($query->have_posts()):
                while($query->have_posts()):
                    $query->the_post();
                    
                    get_template_part('template-parts/content', 'preview');
                    
                endwhile;
            endif; ?>
    </div>

</section>

<?php
get_footer();
