var ProductInfo = React.createClass({
    render: function () {
        return (
            <div class="product" data-product-to-pin="Bedrijfsprofiel">
                <div class="description">


                    <h3>Bedrijfsprofiel<span class="js-pin-button unpinned"></span></h3>

                </div>

                <div class="price">
                    <h3>€ 9,50</h3>
                </div>

                <a href="/orderstraat/product-kiezen/?orig=hema&amp;kvknummer=090705870000"
                   class="cancel js-remove-product" title="Ander product kiezen"
                   data-track-cancel-product-click="{&quot;name&quot;:&quot;Bedrijfsprofiel&quot;, &quot;price&quot;:&quot;9,50&quot;, &quot;category&quot;:&quot;09070587&quot;,&quot;variant&quot;:&quot;&quot;}"></a>
            </div>
        );
    }
});
