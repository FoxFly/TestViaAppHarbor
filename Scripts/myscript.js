/* appel � la cr�ation d'un article */
$("#createForm").click(function () {
    $.ajax({
        type: "GET",
        url: 'http://untest.apphb.com/article/Create',
    }).done(function (response) {
        $('#createArticleForm').append(response);
    }
    );
});

/* appel de la validation d'un article : cr�ation d'un article */
