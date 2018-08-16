/**
*
*/
var eid, ename, bs, da, hra, epf, gross;
	function Abu() 
	{
		//alert("This is abu");
		/* eid = document.emp.EmpId.value;
		ename = document.emp.EmpName.value;
		bs = parseInt(document.emp.EmpSal.value); */ 
		//alert(eid+" "+ename+" "+bs);
		
		eid = document.getElementById("EmpId").value; //this also can be used to access value from form
		ename = document.getElementById("EmpName").value;
		bs = parseInt(document.getElementById("EmpSal").value); 
		
		da = calDA(); //this is how other method is called and the return value is stored in variable.
		hra = calHRA();
		epf = calEPF();
	
		gross = (bs + da + hra) - (epf);
		alert(" Your Dearness Allowance is: "+da);
		alert(" your hra is: "+hra);
		alert(" your epf is: "+epf);
		alert(" your gross salary  is: "+gross);
		//document.write(" your gross salary  is: "+gross);
		
		//document.getElementById("gs").style.visibility='visible';
		document.getElementById("gs").value=gross;
		//document.getElementById("gs").form.id;
		
	}
	function calDA() 
	{
		if (bs < 10000) 
		{
			return bs * 0.2;
		} 
		else if (bs >= 10000 && bs <= 20000) 
		{
			return bs * 0.3;
		}
		else 
		{
			return bs * 0.4;
		}
	}
	function calHRA() 
	{
		if (bs < 10000)
		{
			return bs * 0.2;
		} 
		else if (bs >= 10000 && bs <= 20000) 
		{
			return bs * 0.3;
		} 
		else
		{
			return bs * 0.4;
		}
	}
	function calEPF()
	{
		if (bs < 10000)
		{
			return bs * 0.2;
		}
		else if (bs >= 10000 && bs <= 20000) 
		{
			return bs * 0.3;
		} 
		else 
		{
			return bs * 0.4;
		}
	}
	
	function selectTech()
	{
		var tech=document.getElementById("Tech");
		//alert( " you have selected technology "+tech.options[tech.selectedIndex].value);
		
		var choice=tech.options[tech.selectedIndex].value;
		if(choice=='java')
			addJava();
		else if(choice=='.net')
			addNet();
		else if(choice=='sap')
			addSap();
		else if(choice=='mainframe')
			addMainframe();
		else 
			addTesting();
		
		
	}
	
	function addJava() 
	{
		alert("inside java");
		var opt1=new Option();
		opt1.text="Spring";
		opt1.value="spring";
		
		var opt2=new Option();
		opt2.text="Servlet";
		opt2.value="servlet";
		
		var opt3=new Option();
		opt3.text="JSP";
		opt3.value="jsp";
		
		var opt4=new Option();
		opt4.text="JSTL";
		opt4.value="jstl";
		
		var domain=document.getElementById("domain");
		domain.options.length=0;
		domain.add(opt1);
		domain.add(opt2);
		domain.add(opt3);
		domain.add(opt4);
	}
	
	function addNet() 
	{
		alert("inside net");
		var opt1=new Option();
		opt1.text="SharePoint";
		opt1.value="sharepoint";
		
		var opt2=new Option();
		opt2.text="#c";
		opt2.value="#c";
		
		
		var domain=document.getElementById("domain");
		domain.options.length=0;
		domain.add(opt1);
		domain.add(opt2);
		
	}
	
	function addSap() 
	{
		alert("inside sap");
		var opt1=new Option();
		opt1.text="S&D";
		opt1.value="S&D";
		
		var opt2=new Option();
		opt2.text="Hana";
		opt2.value="hana";
		
		
		var domain=document.getElementById("domain");
		domain.options.length=0;
		domain.add(opt1);
		domain.add(opt2);
		
	}
	function addMainframe() 
	{
		alert("inside mainframe");
		var opt1=new Option();
		opt1.text="JCL";
		opt1.value="jcl";
		
		var opt2=new Option();
		opt2.text="Cobol";
		opt2.value="cobol";
		
		
		var domain=document.getElementById("domain");
		domain.options.length=0;
		domain.add(opt1);
		domain.add(opt2);
		
	}
	function addTesting() 
	{
		alert("inside testing");
		var opt1=new Option();
		opt1.text="Manual";
		opt1.value="manual";
		
		var opt2=new Option();
		opt2.text="Automatic";
		opt2.value="automatic";
		
		
		var domain=document.getElementById("domain");
		domain.options.length=0;
		domain.add(opt1);
		domain.add(opt2);
		
	}
	
	
	
	
	
	
	