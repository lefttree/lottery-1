(function(){var a=[19,25,6,7,34,2];Array.prototype.contains=function(a){for(var b=0;b<this.length;b++)if(this[b]==a)return!0;return!1},xb={generateBlocks:function(b,c){var d='',e=b.length;console.log(b),console.log('data length '+e);for(var f=0;f<e;f++)if(b[f].employee_id){var g='block';1==b[f].win&&(g+=' out',a.push(f)),d+='<div class="'+g+'"><img id="emp'+b[f].employee_id+'" src="public/pictures/'+b[f].employee_id+'.jpeg" data-id="'+b[f].employee_id+'"></div>'}$('.blocks').append(d),c()},bounceIn:function(a){setTimeout(function(){a.addClass('animated bounceIn delay').css('opacity',1),setTimeout(function(){a.removeClass('animated bounceIn delay')},1250)},1e3*Math.random())},lights:function(a){this.interval='',this.wrap=a.wrap,this.speed=a.speed?a.speed:50;var b=0;this.generate=function(){for(var b='',c=0;44>c;c++)33<=c?b+='<div class="light" style="left:3px;top:'+(245-22*(c%11))+'px;"></div>':22<=c&&33>c?b+='<div class="light" style="right:'+(3+22*(c%11))+'px;top:245px;"></div>':11<=c&&22>c?b+='<div class="light" style="right:3px;top:'+(3+22*(c%11))+'px;"></div>':0<=c&&12>c&&(b+='<div class="light" style="left:'+(3+22*c)+'px;top:3px;"></div>');$(this.wrap).html(b),!1!=a.auto&&this.setSpeed()},this.setSpeed=function(a){this.stop();var c=this.wrap;this.speed=a?a:50,this.interval=setInterval(function(){$(c+' .active').removeClass('active'),$(c+' .light:eq('+b%44+')').addClass('active'),b++},this.speed)},this.stop=function(){$(this.wrap+' .active').removeClass('active'),this.interval?clearInterval(this.interval):''},this.generate()},autoChange:function(){this.interval='',this.run=function(){this.stop(),this.interval=setInterval(function(){var b=$('.block:not(.out)').length;if(1<b){for(var c,d=parseInt(8*Math.random())+2,e=$('.block').length,f=[],g=0;b<d;)d=parseInt(Math.random()*b)+2;for(var h=0;h<a.length;h++)f.push(a[h]);for(var i,h=0;g<d;h++)(i=parseInt(Math.random()*e),!f.contains(i))&&(f.push(i),g++,$('.block:eq('+i+')').addClass('changing'));c=$('.changing:eq(0) img').clone(),$('.changing').each(function(a,b){var e=$(b);a==d-1?e.append(c):e.append($('.changing:eq('+(a+1)+') img').clone())}),setTimeout(function(){$('.changing').each(function(a,b){var c=$(b);c.html(c.find('img:eq(1)')).removeClass('changing')})},1e3)}},3e3)},this.stop=function(){clearInterval(this.interval)},this.run()},bindBtn:function(){var b=this;b.status='free',b.prize='3',b.winners_0=[],b.winners_1=[],b.winners_2=[],b.winners_3=[],b.mustwin=[],b.blacklist=[],$('.btn').click(function(){b.change()}),document.onkeydown=function(a){32==a.keyCode&&b.change()},this.change=function(){if('restart'==b.status)-1==b.prize?alert('\u6CA1\u5956\u5566\uFF01'):(3==b.prize?12==b.winners_3.length&&(b.prize-=1):2==b.prize?5==b.winners_2.length&&(b.prize-=1):1==b.prize?3==b.winners_1.length&&(b.prize-=1):0==b.prize&&2==b.winners_0.length&&(b.prize-=1),-1==b.prize?alert('\u6CA1\u5956\u5566\uFF01'):(light.setSpeed(),b.status='free'));else if('free'==b.status)light.setSpeed(25),$('.rollStatus')[0].className='rollStatus sRolling',$('.block').addClass('mask'),b.waitRandInterval=setInterval(function(){var a=xb.uniqueRand();$('.block').addClass('mask'),$('.block:eq('+a+')').removeClass('mask')},80),b.status='waiting';else if('waiting'==b.status)b.status='ending',light.setSpeed(),$('.rollStatus')[0].className='rollStatus sEnding',setTimeout(function(){var a=xb.uniqueRand();b.winner={employee_id:a},clearInterval(b.waitRandInterval),b.changeSlowDown(80)},1e3);else if('end'==b.status)this.confetti.StopConfetti(),$('.rollStatus')[0].className='rollStatus sStart',$('.resultMask').hide().removeClass('normal egg'),$('.resultContent').removeClass('ac'),b.status='free';else if('egg'==b.status){var a=234;if(b.isBegin)return!1;$('.resultContent').addClass('ac'),b.isBegin=!0,$('.num').css('backgroundPositionY',0);var c=b.winner.hongbao,d=(c+'').split('');$('.num').each(function(c){var e=$(this);setTimeout(function(){e.animate({backgroundPositionY:60*a-a*d[c]},{duration:6e3+3e3*(4-c),easing:'easeInOutCirc',complete:function(){0==c&&(b.isBegin=!1,b.status='end')}})},300*(4-c))})}},this.changeSlowDown=function(c,d){function e(c,e){setTimeout(function(){if($('.block').addClass('mask'),!e){var f=xb.uniqueRand();$('.block:eq('+f+')').removeClass('mask'),b.changeSlowDown(c,++d)}else{var g=$('#emp'+b.winner.employee_id).parent(),h=g.index();g.removeClass('mask'),'yes'==b.winner.egg?b.result('egg'):b.result('chaoxingfen'),console.log(a),a.push(b.winner.employee_id),console.log(a),console.log('-----------')}},c)}d?'':d=0;var f=c+parseInt(10*Math.random()*d);3>d||250>f?(5>d&&$('#willwill').text('\u8981\u505C\u5566!'),e(f)):e(1200,!0)},this.result=function(a){$('.rollStatus')[0].className='rollStatus sStart','egg'==a?($('.resultMask').addClass('egg').show(),b.resultShow('egg')):'chaoxingfen'==a&&($('.resultMask').addClass('normal').show(),b.resultShow('end'))},this.resultShow=function(a){var c=b.winner.employee_id;$('#emp'+c).parent().addClass('out'),$('.block').removeClass('mask'),this.confetti||(this.confetti=new confetti),'egg'==a?this.confetti.StartConfetti('egg'):this.confetti.StartConfetti(),$('#winner').attr('src','public/pictures/'+c+'.jpeg'),console.log(c),this.addWinner(c),3==b.prize?b.winners_3.push(c):2==b.prize?b.winners_2.push(c):1==b.prize?b.winners_1.push(c):0==b.prize&&b.winners_0.push(c),setTimeout(()=>{this.confetti.StopConfetti(),$('#emp'+c).parent().removeClass('out'),$('.block').removeClass('mask'),$('.resultMask').hide(),b.status='restart',this.change()},2e3)},this.addWinner=function(a){$('.prize-'+b.prize).append('<img id="emp'+a+'" src="public/pictures/'+a+'.jpeg" data-id="'+a+'">')}},uniqueRand:function(){for(var b,c=$('.block').length;;)if(b=parseInt(Math.random()*c),0!=b&&!a.contains(b))break;return b}}})();var autoChange,lootteryUrl='p';$.ajax({url:'memberlist.json',success:function(a){xb.generateBlocks(a,function(){$('.content .block').each(function(a,b){xb.bounceIn($(b))}),xb.bindBtn()})}});var light=new xb.lights({wrap:'.lightsWrap'});