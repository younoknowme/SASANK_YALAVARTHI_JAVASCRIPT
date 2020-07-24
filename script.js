function validateform(){
        var name=document.myform.name.value;
		var password = document.myform.password.value;
        var mobile=document.myform.mobile.value;
        var date=document.myform.date.value;
        var mailformat=/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
        var dateformat=/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
        var mobileformat=/^[-+]?[0-9]/;
        if(name==""){
            alert("Email ID Cannot be Blank");
            document.getElementById('nameID').innerHTML="* Please Enter Email *";
            document.getElementById('nameID').style.color="red";
    
            return false;
        }
        if(!name.match(mailformat)){
            document.getElementById('nameID').innerHTML="* Please Enter Valid Email *";
            document.getElementById('nameID').style.color="red";
    
            document.getElementById('nameIDText').focus();
            return false;
        }
		if(password=="" || password==null){
			
			alert("Password is Empty");
			document.getElementById('passwordID').innerHTML="* Please Enter Password *";
            document.getElementById('passwordID').style.color="red";
			return false;
		}
		if(password.length < 8){
			
			document.getElementById('passwordID').innerHTML="* Password too Short *";
            document.getElementById('passwordID').style.color="red";
			
			
			document.getElementById('passwordIDText').focus();
            return false;
		}
        if(mobile==null||mobile==""||mobile.length==0){
            alert("Mobile Number Cannot be Blank");
            document.getElementById('mobileID').innerHTML="* Please Enter Mobile Number *";
            document.getElementById('mobileID').style.color="red";
            return false;
        }
        if(mobile.length!=10 || !mobile.match(mobileformat)){
    
            document.getElementById('mobileID').innerHTML="* Please Enter A Valid Mobile Number *";
            document.getElementById('mobileID').style.color="red";
    
            document.getElementById('mobileIDText').focus();
            return false;
        }
        if(date==""){
            alert("Please Enter Date");
            document.getElementById('dateID').innerHTML="* Please Enter Date*";
            document.getElementById('dateID').style.color="red";
            return false;
        }
        if(!date.match(dateformat)){
            document.getElementById('dateId').innerHTML="* Please Enter A Valid Date*";
            document.getElementById('dateId').style.color="red";
    
            document.getElementById('dateIdText').focus();
            return false;
        }
}