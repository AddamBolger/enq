<nav class="page-nav">
    <ul>
        <?php 
            $urls = array(
                'Home' => '/',
                'Food & Drink' => '/pages/food-drink.php',
                'Art' => '/pages/art.php'
            );

            $currentPage = "$_SERVER('REQUEST_URI')";

            foreach ($urls as $name => $url) {
                print '<li ' .(($currentPage === $name) ? ' class="active" ': '').
                '><a href="'.$url.'">'.$name.'</a></li>';
            }

            
        ?>
    </ul>
</nav>