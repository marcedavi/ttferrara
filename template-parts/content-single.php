<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

    <div class="w-full mb-8 font-medium">
        <a href="<?php echo wp_get_referer(); ?>" class="link">&lt;&lt; Torna indietro</a>
    </div>
    
    <header class="entry-header mb-4 mt-16">
        <?php the_title( sprintf( '<h1 class="entry-title text-2xl lg:text-5xl font-extrabold leading-tight mb-1"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h1>' ); ?>
        <time datetime="<?php echo get_the_date( 'c' ); ?>" itemprop="datePublished" class="text-sm text-gray-700"><?php echo get_the_date(); ?></time>
    </header>

	<div>
		<div class="content-single">
            <?php the_post_thumbnail('ttferrara_large', array(
                'class' => 'w-1/2 rounded-lg shadow-lg float-right ml-8 mb-8'
            )); ?>        
            <?php echo get_the_content(); ?>
        </div>
            

		<?php
			wp_link_pages(
				array(
					'before'      => '<div class="page-links"><span class="page-links-title">Pages:</span>',
					'after'       => '</div>',
					'link_before' => '<span>',
					'link_after'  => '</span>',
					'pagelink'    => '<span class="screen-reader-text">Page </span>%',
					'separator'   => '<span class="screen-reader-text">, </span>',
				)
			);
		?>
	</div>

    <div class="w-full mb-8 font-medium mt-8">
        <a href="<?php echo wp_get_referer(); ?>" class="link">&lt;&lt; Torna indietro</a>
    </div>

</article>
