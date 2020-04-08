swal({
    title: "Hello World!!!",
    text: "Hello visitor, you have landed upon my little webspace. I hope you're doing well."
    // buttons: ["Nope, I'm just looking around.", "Yes, I'm hiring :)"]
    // buttons: {
    // 	cancel: {
    // 	  text: "Nope.",
    // 	  value: false,
    // 	  visible: true,
    // 	  className: "button-cancel",
    // 	  closeModal: true,
    // 	},
    // 	confirm: {
    // 	  text: "Yes, I'm hiring.",
    // 	  value: true,
    // 	  visible: true,
    // 	  className: "button-confirm",
    // 	  closeModal: true
    // 	}
    // }
});
var invites = [ 'Coder | Developer | Reader | Gamer', 'R Y U K']
var ind=0;
var inv_size=invites.length;
function printit() {
    $("#replaceStrings").html(invites[ind]);
    ind=(ind+1)%inv_size;
    $('#replaceStrings').typeIt({
        // breakLines: false,
        speed: 100,
        // deleteDelay: 1200,
        autoStart: true,
        // loop: true,
        // loopDelay: 1500
    });
    setTimeout(printit, 8000);
}
$(document).ready(printit());
