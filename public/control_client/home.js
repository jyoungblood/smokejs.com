define(["stereo/smoke"], function(smoke) {

	var o = {


		prompt_demo: function(ver){

			var q = 'What\'s in the bag?';
			if (ver == 2){
				q = 'No no, you HAVE to answer.<br /> What\'s in the bag?';
			}

			smoke.prompt(q, function(e){
				if (e){
					smoke.signal('You have no idea how badly<br /> I need a bag of '+e+'. <br /><br /> Give it to me. Right now.<br /><br />');
				}else{
					o.prompt_demo(2);
				}
			}, {
				reverseButtons: true,
				value: 'hammers',
				ok: 'Have a look',
				cancel: 'None of your business'
			});
			
		},


		init: function(){

/*
			$('a[rel="demo-alert"]').on('click',function(e){
				e.preventDefault();
				smoke.alert("Wouldn't it be funny if Animal Collective was an actual<br /> collective of actual animals?", function(e){
					smoke.signal('No really...it totally would, dude.<br />I mean, think about it.');
				},{
					ok: "Yeah, probably"
				});
			});




			$('a[rel="demo-confirm"]').on('click',function(e){
				e.preventDefault();
				smoke.confirm("Slippery breath inside<br /> banjo melted. Runny smoky. ",function(e){
					if (e){
						smoke.signal('Perfect. We\'ll be in touch.');
					}else{
						smoke.signal('Please...me so sorry. You look good in dress, you look better on my floor.');
					}
				}, {
					reverseButtons: true,
					ok: "AGREE",
					cancel: "DISAGREE"
				});
			});



			$('a[rel="demo-prompt"]').on('click',function(e){
				e.preventDefault();
				o.prompt_demo(1);
			});
			


			$('a[rel="demo-quiz"]').on('click',function(e){
				e.preventDefault();

				smoke.quiz('Which of these things<br /> is the worst thing?', function (e){
					if (e == 'DISCO'){
						smoke.signal('nope. it\'s funk.');
					}
					if (e == 'REGGAE'){
						smoke.signal('nope. it\'s disco.');

					}					
					if (e == 'FUNK'){
						smoke.signal('nope. it\'s reggae.');
					}
				}, 
					{	button_1	:	"DISCO", 
						button_2	: "REGGAE", 
						button_3	: "FUNK", 
						button_cancel: "NONE OF THEM"
					}
				);
			});



			$('a[rel="demo-signal"]').on('click',function(e){
				e.preventDefault();
				smoke.signal('Congratulations! You have just one a free iPod Touch!', function(){}, {duration: 5000, classname: "custom-class"});
			});
*/



		}
	};

  return o;
});