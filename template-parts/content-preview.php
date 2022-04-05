<a href="<?php echo esc_url(get_permalink()); ?>" class="article-preview-link shadow-md rounded-lg hover:shadow-lg transition-shadow">
    <article id="post-<?php the_ID(); ?>" <?php post_class(array(
        'flex',
        'flex-col',
        'md:flex-row',
        'relative',
        'md:h-32'
    )); ?>>

        <?php if(has_post_thumbnail()) { ?>
            <div class="w-full md:w-1/6">
                <?php the_post_thumbnail('small', array(
                    'class' => 'max-h-96 object-cover w-full md:h-full rounded-t-lg md:rounded-l-lg md:rounded-r-none'
                )) ?>
            </div>
        <?php } ?>

        <div class="w-full flex flex-col items-center p-4">
            <div class="w-full flex flex-col-reverse md:flex-row md:justify-between md:items-center">
                <?php the_title('<h3 class="leading-tight mb-1">', '</h3>'); ?>
                <time datetime="<?php echo get_the_date( 'c' ); ?>" itemprop="datePublished" class="text-sm text-gray-700"><?php echo get_the_date(); ?></time>
            </div>

            <div class="w-full">
                <?php the_excerpt(); ?>
            </div>
        </div>

    </article>
</a>