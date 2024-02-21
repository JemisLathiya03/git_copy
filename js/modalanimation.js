$('#exampleModal').modal();

function afterModalTrtion(e) {
    e.setAttribute("style", "display: none !important;");
}
$('#exampleModal').on('hide.bs.modal', function (e) {
    setTimeout(() => afterModalTransition(this), 200);
})