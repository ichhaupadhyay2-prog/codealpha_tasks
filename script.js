document.getElementById("postBtn").addEventListener("click", function() {
    let text =
    document.getElementById("postInput").value;
    if (text.trim() ===""){
        alert("Please write something!");
        return;
    }
      let postDiv =
      document.createElement("div");
      postDiv.classList.add("post");
      postDiv.innerHTML ="<p>"+ text +
    "</p>" +
    "<button onclick='likePost(this)'>❤️Like (0)</button>" +
    "<button onclick ='deletePost(this)'>Delete</button>" +
    "<input type='text' placeholder='Write a comment...'>" +
     "<button onclick ='addComment(this)'>Comment</button>"+
     "<div class='comments'></div>";
     "<button onclick ='deletePost(this)'>Delete</button>"
      document.getElementById("posts").appendChild(postDiv);
      document.getElementById("postInput").value ="";
});
function likePost(btn) {
    let count =
    parseInt(btn.dataset.count|| 0);
    count++;
    btn.dataset.count =count;
    btn.innerHTML ="❤️ Like(" + count + ")";
}
    function followUser() {
        document.getElementById("followBtn").innerHTML = "following";
}
function addComment(btn) {
    let commentInput = btn.previousElementSibling;
    let commentText = commentInput.value;
    if (commentText.trim() === "") {
        return;
    }
    let p =document.createElement("p");
    p.innerHTML = "💬" + commentText;
    btn.nextElementSibling.appendChild(p);
    commentInput.value = "";
    }
    function deletePost(btn) {
        btn.parentElement.remove();
    }
    

