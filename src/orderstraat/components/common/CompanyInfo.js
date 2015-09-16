var CompanyInfo = React.createClass({
    render: function () {
        return (
            <div>
                <h3>HEMA</h3>

                <p class="type">Hoofdvestiging</p>

                <p>KvK 09070587</p>

                <p>Vestigingsnr. 000019196687</p>

                <p>Didamsestraat 17</p>

                <p>Zevenaar</p>

                <div class="info">
                    <a href="#" class="url"></a>

                    <div class="kenmerk">
                    </div>

                </div>

                <a href="/orderstraat/bedrijf-kiezen/?clear=" class="cancel" title="Ander bedrijf kiezen"
                   data-track-cancel-product-click="{&quot;name&quot;:&quot;Bedrijfsprofiel&quot;, &quot;price&quot;:&quot;9,50&quot;, &quot;category&quot;:&quot;09070587&quot;,&quot;variant&quot;:&quot;&quot;}"></a>
            </div>
        );
    }
});
