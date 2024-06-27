$(document).ready(function () {

    $("#list-files").click(function () {
        listFiles("/files/getfiles");
    });
    // We most likely won't have a private option, uses will need to discover that themselves
    // delete, we don't charge anything
    // Yes, we will list our "files"

    function listFiles(url) {
        console.log(url)
      $.ajax({
        url: url,
        type: "GET",
        success: function (files) {
          displayFiles(files);
        },
        error: function (error) {
          console.error("Error fetching novels:", error);
        },
      });
    }
    // This displays the content, ez pz

    function displayFiles(files) {
      $("#file-list").empty();
      for (var i = 0; i < files.length; i++) {
        var fileitem = $(
          '<li class="novel-item" style="border: 1px solid #C4141C; padding: 10px;">' +
            files[i].slice(0,-4).replaceAll('-',' ') +
            ' <button class="read-button" style="color: white; margin-left: 10px"  data-name="' +
            files[i] +
            '">Read</button></li>'
        );
        $("#file-list").append(novelItem);
      }
    }
  
    function displayFileContent(content) {
      alert(content);
    }
  
    $("#file-list").on("click", ".read-button", function () {
      var fileName = $(this).data("FileName");
      $.ajax({
        url: "/files/getfiles/" + fileName,
        type: "GET",
        success: function (response) {
          if (response.success) {
            displayFileContent(response.msg);
          } else {
            alert(response.msg);
          }
        },
        error: function (error) {
          alert(error.responseJSON.msg);
        },
      });
    });
  });
  