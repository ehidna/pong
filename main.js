$(document).ready(function() {
    var g, top, stage,raket,a,s,sagraket,ayrik;

	initializeSound();
    //sahneyi olusturuyoruz
    stage = new createjs.Stage(document.getElementById("canvas"));

    //icine cizim yapcagimiz sekli olusturuyoruz
    top = new createjs.Shape();

    //sekli sahnenin icine koyuyoruz
    stage.addChild(top);


    var skor=0;
    var skorPano=new createjs.Text(skor,"40px Arial","#ffffff");
    skorPano.x=260;
    skorPano.y=10;

    stage.addChild(skorPano);

	var Pause = new createjs.Text("PAUSE","70px Arial","#ffffff");
	Pause.x=205;
	Pause.y=180;
	

	var sagskor=0;
    var sagskorPano=new createjs.Text(sagskor,"40px Arial","#ffffff");
    sagskorPano.x=355;
    sagskorPano.y=10;

    stage.addChild(sagskorPano);


	ayrik = new createjs.Shape();
	stage.addChild(ayrik);
	r = ayrik.graphics;
	r.clear();
	r.setStrokeStyle(1);
	r.beginStroke("#ffffff");
	r.beginFill("ffffff");
	for(var i=20;i<=480;i+=20){
		r.rect(0,i,5,7);
	}
	r.moveTo(0,0);
	r.lineTo(0,7);
	r.lineTo(5,7);
	r.lineTo(5,0);
	r.lineTo(0,0);
	r.endStroke();
	ayrik.x=320;
	ayrik.y=0;
	

    //seklin grafik nesnesini aliyoruz. Boylece icine cizim yapicaz
    g = top.graphics;

    //seklin icini temizliyoruz
    g.clear();

    //cizgi ayarlari
    g.setStrokeStyle(1);
    g.beginStroke("#ffffff");
	g.beginFill("ffffff");
	
    //cizimi yaptiriyoruz

	
	g.moveTo(0,0);
	g.lineTo(10,0);
	g.lineTo(10,10);
	g.lineTo(0,10);
	g.lineTo(0,0);
    //fircayi sonlandiriyoruz 
	g.endStroke();

    //shapei yerdegistiriyorum
    top.x=315;
    top.y=150;

	raket = new createjs.Shape();

    //sekli sahnenin icine koyuyoruz
    stage.addChild(raket);

    //seklin grafik nesnesini aliyoruz. Boylece icine cizim yapicaz
    a = raket.graphics;

    //seklin icini temizliyoruz
    a.clear();

    //cizgi ayarlari
    a.setStrokeStyle(1);
    a.beginStroke("#ffffff");
	a.beginFill("ffffff");
	a.moveTo(0,0);
	a.lineTo(0,40);
	a.lineTo(7,40);
	a.lineTo(7,0);
	a.lineTo(0,0);
	a.endStroke();

    //shape1'i yerdegistiriyorum
    raket.x=30;
    raket.y=30;
	

    
	sagraket = new createjs.Shape();

    //sekli sahnenin icine koyuyoruz
    stage.addChild(sagraket);

    //seklin grafik nesnesini aliyoruz. Boylece icine cizim yapicaz
    s = sagraket.graphics;

    //seklin icini temizliyoruz
    s.clear();

    //cizgi ayarlari
    s.setStrokeStyle(1);
    s.beginStroke("#ffffff");
	s.beginFill("ffffff");
	s.moveTo(0,0);
	s.lineTo(0,40);
	s.lineTo(7,40);
	s.lineTo(7,0);
	s.lineTo(0,0);
	
	s.endStroke();

    //shape1'i yerdegistiriyorum
    sagraket.x=600;
    sagraket.y=30;
	
	
    //sahneyi cizdirtiyoruz
    stage.update();
	var hiz1y=0;
	var hiz2y=0;
	var pause = false;
	var restart = false;
	$(document).keydown(function(event){ //kullanici tusa bastiginda
        switch(event.which){
            case 80:
				if(top.x>=0&&top.x<=640&&top.y>=0&&top.y<=470){
					if(pause == false){
						pause = true;
						stage.addChild(Pause);
						hizx=0;hizy=0;
					}
				else{
					if(pause == true){
						pause = false;
						hizx=5;hizy=-5;
						
					}
				}
				}
				break;
			case 82:
				if(restart == false){
					restart = true;
					skorPano.text=0;
					sagskorPano.text=0;
					top.x=315;
					top.y=150;
					hizx=5;
					hizy=-5;
				}else{
					if(restart == true){
						restart = false;		
					}
				}
				break;
            case 38: //yukari ok tusunun kodu
                hiz2y= -5; //hizi yukari dogru 5'e ayarla
                break;
            
			case 87: //yukari ok tusunun kodu
	             hiz1y= -5; //hizi yukari dogru 5'e ayarla
	             break;
			case 83: //yukari ok tusunun kodu
	             hiz1y= 5; //hizi yukari dogru 5'e ayarla
	             break;
            case 40: //asagi tusunun kodu
                hiz2y= 5; //hizi asagi dogru 5'e ayarla
                break;            
        }
    });
//82 r ,80 p
    $(document).keyup(function(event){ //tusa basmayi biraktiginda tum hizlari sifirla
        console.log(event.which,"p");
        
		switch(event.which){
            case 80:
				if(pause == true){
					pause = false;
					hizx;hizy;
				}
				else{
					if(pause == false){
						pause = true;
						
					}
				}
			break;
			
            case 38: //yukari ok tusunun kodu
                hiz2y= 0; //hizi yukari dogru 5'e ayarla
                break;
            
			case 87: //yukari ok tusunun kodu
	             hiz1y= 0; //hizi yukari dogru 5'e ayarla
	             break;
			case 83: //yukari ok tusunun kodu
	             hiz1y= 0; //hizi yukari dogru 5'e ayarla
	             break;
            case 40: //asagi tusunun kodu
                hiz2y= 0; //hizi asagi dogru 5'e ayarla
                break;            
        }

    });

    var hizx=5;
    var hizy=-5;

     //tusa basmayi biraktiginda tum hizlari sifirla
    //iceri girip girmedigini tek bir kere belirtebilmek icin kullandigimiz bir flag
    setInterval(function(){ //her 30 milisaniyede bir is yaptirmak icin
        top.x+=hizx; // degerleri hizlari kadar arttir
        top.y+=hizy;
		 // sahneyi yeni goruntuyle guncelle
		if(top.y==0 || top.y==470) {
			hizy=-hizy;
			playSound(3);}
		if(top.x==0 || top.x+10==640) {
			hizx=-hizx;
			playSound(2);
			if(top.x==0){
            	sagskor++;
            	sagskorPano.text=sagskor;
        	}else{
            	skor++;
            	skorPano.text=skor;
        	}
    	}
		if(raket.y<=top.y+10&&raket.y+40>=top.y&&raket.x+7>=top.x){
            playSound(3);
			hizx=-hizx;
        }
		if(sagraket.y<=top.y+10&&sagraket.y+40>=top.y&&sagraket.x<=top.x+10){
            playSound(3);
			hizx=-hizx;
        }
		sagraket.y+=hiz2y;
		raket.y+=hiz1y;
		stage.update();
    },30);

});