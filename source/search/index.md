---
title: 'Search Post&Page'
---

<link href="/tipuesearch/tipuesearch.css" rel="stylesheet">
<script src="/tipuesearch/tipuesearch_set.js"></script>
<script src="/tipuesearch/tipuesearch.min.js"></script>
<!-- Other code may be here -->

<form id="search-form">
  <input  type="text" name="q" id="tipue_search_input" autocomplete="off" required placeholder="搜索..." style="width:80%;" /><span class="tipue_search_button"><div class="tipue_search_icon">&#9906;</div></span><br /><br /><br /><span>Enter To Search</span><br />
  <div id="tipue_search_content" style="display: none"></div>
</form>

<script>
    $(document).ready(function () {

        var searchInput = $('#tipue_search_input');
        searchInput.tipuesearch({
            'mode': 'json',
            'minimumLength': 1,
            'contentLocation': '/tipuesearch/tipuesearch_content.json',
            highlightEveryTerm: true
        });

        $('#search-form').on('submit', function (e) {
            e.preventDefault();
            $('#tipue_search_content').show();
            $('#content').hide();
        });

        searchInput.keyup(function () {
            var length = $(this).val().length;
            if (length < 1) {
                $('#tipue_search_content').hide();
                $('#content').show();
            }
        });
    });
</script>