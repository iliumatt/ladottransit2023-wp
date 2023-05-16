<?php
function boldgrid_enqueue_styles() {
    $parent_style = 'boldgrid-primas';
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'child-style', get_stylesheet_directory_uri() . '/style.css', array( $parent_style ),
    wp_get_theme()->get('Version') );
}
add_action( 'wp_enqueue_scripts','boldgrid_enqueue_styles' );

function theme_app() {
    wp_enqueue_script( 'theme_app', get_stylesheet_directory_uri() . '/js/app.js', array( 'jquery' ), null, true );
}
add_action( 'wp_enqueue_scripts', 'theme_app' );

// stop reformatting html
remove_filter('the_content', 'wpautop');
remove_filter( 'the_excerpt', 'wpautop' );
add_filter( 'run_wptexturize', '__return_false' );
//set iframe height on select pages
function hook_iframeHeight() {
  if (is_page (2306)) { 
    ?>
        <script type="text/javascript">
          //AutoHeight on iframes inside tag
            function doIframe() {
                var hiframes = jQuery(".autoHeight iframe"); 
                hiframes.each(function() {
                    var iframe = this;
                    jQuery(iframe).load(function() {
                        setHeight(iframe);
                    });
                });
            }

            function setHeight(e) {
              e.height = e.contentWindow.document.body.scrollHeight + 35;
            }

            jQuery(window).load(function() {
                doIframe();
            });
            console.log("autoHeight LOaded");
        </script>
    <?php
  }
}
add_action('wp_head', 'hook_iframeHeight');

//REGISTER PRE-FOOTER MENU
function register_pf_menu() {
register_nav_menu('pf-menu',__( 'Pre-Footer Menu' ));
}
add_action( 'init', 'register_pf_menu' );