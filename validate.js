<script>

function validate()
{
	var missingFields = false;
	var fname1 = true;
	var fname2 = true;
	var fname3 = true;
	var lname1 = true;
	var lname2 = true;
	var lname3 = true;
	var lname4 = true;
	var strFields = "";
	var fname = document.msform.firstName;
	var fnamealpha = /^[a-zA-Z\s-, ]+$/;
	var lname = document.msform.lastName;
	var lnamealpha = /^[a-zA-Z\s-, ]+$/;
	var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
	var email = document.msform.email;
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	var phoneno = /^\(?([2-9][0-9]{2})\)?[-. ]?([2-9](?!11)[0-9]{2})[-. ]?([0-9]{4})$/;
	var phone2 = /^([0-9])\1{2}\1{3}\1{4}$/;

	if(document.msform.remoteCampaignId.value=="")
	{
		missingFields = true;
		$("#error-001").html("<div class='nodisplay'>Please Select Location.</div>").fadeIn();
		document.getElementById("remoteCampaignId").className="form-control errorclass";
	}else{
		document.getElementById("error-001").style.display="none";
		document.getElementById("remoteCampaignId").className="form-control successclass";
	}
	if(document.msform.programOfInterest.value=="")
	{
		missingFields = true;
		$("#error-002").html("<div class='nodisplay'>Please Select Program Of Interest.</div>").fadeIn();
		document.getElementById("programOfInterest").className="form-control errorclass";
	}else{
		document.getElementById("error-002").style.display="none";
		document.getElementById("programOfInterest").className="form-control successclass";
	}
	if (fname.value == "")
	{
		missingFields = true;
		fname1 = false;
		$("#error-003").html("<div class='nodisplay'>Please Enter First Name.</div>").fadeIn();
		//document.getElementById("firstName").className="form-control errorclass";
	}else{
		document.getElementById("error-003").style.display="none";
		//document.getElementById("firstName").className="form-control successclass";
	}
	if (!fname.value.match(fnamealpha))
	{
		missingFields = true;
		fname2 = false;
		$("#error-003a").html("<div class='nodisplay'>Only letters allowed for First Name.</div>").fadeIn();
		//document.getElementById("firstName").className="form-control errorclass";
	}else{
		document.getElementById("error-003a").style.display="none";
		//document.getElementById("firstName").className="form-control successclass";
	}
	if (fname.value.length >= 2 && fname.value.length <= 25)
	{
		document.getElementById("error-003b").style.display="none";
		//document.getElementById("firstName").className="form-control successclass";
	}else{
		missingFields = true;
		fname3 = false;
		$("#error-003b").html("<div class='nodisplay'>First Name should be between 2-25 characters long.</div>").fadeIn();
		//document.getElementById("firstName").className="form-control errorclass";
	}
	if (lname.value == "")
	{
		missingFields = true;
		lname1 = false;
		$("#error-004").html("<div class='nodisplay'>Please Enter Last Name.</div>").fadeIn();
		//document.getElementById("lastName").className="form-control errorclass";
	}else{
		document.getElementById("error-004").style.display="none";
		//document.getElementById("lastName").className="form-control successclass";
	}
	if (!lname.value.match(lnamealpha))
	{
		missingFields = true;
		lname2 = false;
		$("#error-004a").html("<div class='nodisplay'>Only letters allowed for Last Name.</div>").fadeIn();
		//document.getElementById("lastName").className="form-control errorclass";
	}else{
		document.getElementById("error-004a").style.display="none";
		//document.getElementById("lastName").className="form-control successclass";
	}
	if (lname.value.length >= 2 && lname.value.length <= 25)
	{
		document.getElementById("error-004b").style.display="none";
		//document.getElementById("lastName").className="form-control successclass";
	}else{
		missingFields = true;
		lname3 = false;
		$("#error-004b").html("<div class='nodisplay'>Last Name should be between 2-25 characters long.</div>").fadeIn();
		//document.getElementById("lastName").className="form-control errorclass";
	}
	if (fname.value == lname.value)
	{
		missingFields = true;
		lname4 = false;
		$("#error-004c").html("<div class='nodisplay'>Last Name cannot be same as First Name.</div>").fadeIn();
		//document.getElementById("lastName").className="form-control errorclass";
	}else{
		document.getElementById("error-004c").style.display="none";
		//document.getElementById("lastName").className="form-control successclass";
	}
	if (!(document.msform.zipCode.value.match(isValidZip)))
	{
		missingFields = true;
		$("#error-007").html("<div class='nodisplay'>Please Enter Valid Zip Code.</div>").fadeIn();
		document.getElementById("zipCode").className="form-control errorclass";
	}else{
		document.getElementById("error-007").style.display="none";
		document.getElementById("zipCode").className="form-control successclass";
	}
	if (!filter.test(email.value))
	{
		missingFields = true;
		$("#error-005").html("<div class='nodisplay'>Please Provide Valid Email Address.</div>").fadeIn();
		document.getElementById("emailaddress").className="form-control errorclass";
	}else{
		document.getElementById("error-005").style.display="none";
		document.getElementById("emailaddress").className="form-control successclass";
	}
	if (!(document.msform.homePhone.value.match(phoneno)))
	{
		missingFields = true;
		$("#error-006").html("<div class='nodisplay'>Please use a valid, 10-digit U.S. phone number.</div>").fadeIn();
		document.getElementById("homePhone").className="form-control errorclass";
	}else{
		document.getElementById("error-006").style.display="none";
		document.getElementById("homePhone").className="form-control successclass";
	}
	if (document.msform.homePhone.value.match(phone2))
	{
		missingFields = true;
		$("#error-006a").html("<div class='nodisplay'>Please use a valid, 10-digit U.S. phone number!</div>").fadeIn();
		document.getElementById("homePhone").className="form-control errorclass";
	}else{
		document.getElementById("error-006a").style.display="none";
	}

	if( fname1 && fname2 && fname3) {
		document.getElementById("firstName").className="form-control successclass";
	}else{
		document.getElementById("firstName").className="form-control errorclass";
	}
	if( lname1 && lname2 && lname3 && lname4) {
		document.getElementById("lastName").className="form-control successclass";
	}else{
		document.getElementById("lastName").className="form-control errorclass";
	}
	if( missingFields ) {
		document.getElementById("errorbox").style.display="block";
		return false;
	}
	document.getElementById("errorbox").style.display="none";
	return true;

}

</script>
