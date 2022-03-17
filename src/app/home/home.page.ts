import { Component, ElementRef, ViewChild } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import html2canvas from 'html2canvas';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  classe: string = "";
  valor: number = 0;
  valorPegada: number = 0;
  telaAtual: number = 0;
  telaLogin: boolean;
  telaFinal: boolean;

  @ViewChild('screen') screen: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;



  //Variaveis das opcoes
  public checkeds = 0;
  public limit = 1;

  public form = [
    { nome: '', isChecked: false, valor: 0 },
    { nome: '', isChecked: false, valor: 0 },
    { nome: '', isChecked: false, valor: 0 },
    { nome: '', isChecked: false, valor: 0 },
    { nome: '', isChecked: false, valor: 0 }
  ];

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private socialSharing: SocialSharing
  ) { }

  limparTabela() {
    this.form = [
      { nome: '', isChecked: false, valor: 0 },
      { nome: '', isChecked: false, valor: 0 },
      { nome: '', isChecked: false, valor: 0 },
      { nome: '', isChecked: false, valor: 0 },
      { nome: '', isChecked: false, valor: 0 }
    ]
  }
  async presentToast(mensagem, cor) {
    const toast = await this.toastController.create({
      message: mensagem,
      duration: 2000,
      color: cor
    });
    toast.present();
  }
  
  downloadImage(){
    //npm i html2canvas
    html2canvas(this.screen.nativeElement, {
      useCORS: true,
    }).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.socialSharing.share(null, 'Android filename', 'data:image/png;base64,R0lGODlhDAAMALMBAP8AAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAUKAAEALAAAAAAMAAwAQAQZMMhJK7iY4p3nlZ8XgmNlnibXdVqolmhcRQA7', null).then((data) => {
        this.presentToast(data, "#2dd36f");
      }).catch((error) => {
        this.presentToast(error,"#eb445a");
      });
      //      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
//      this.downloadLink.nativeElement.download = 'pegada-ecologica.png';
//      this.downloadLink.nativeElement.click();
    });
  }
  
  ionViewWillEnter() {
    this.avancarTelas();
  }

  tirarDuvidas() {
    this.classe = "duvida";
    this.telaLogin = false;
  }
  pegadasMundiais() {
    this.classe = "mundo";
    this.telaLogin = false;
  }
  avancarTelas() {

    if (this.telaAtual == 0) {
      this.classe = "login";
      this.telaLogin = true;
      this.telaFinal = false;
      this.valor = 0;
      this.valorPegada = 0;
    }
    else if (this.telaAtual == 1) {
      this.classe = "q1";
      this.telaLogin = false;
      this.elaborarPergunta1();
    }
    else if (this.telaAtual == 2) {
      this.classe = "q2";
      this.telaLogin = false;
      this.elaborarPergunta2();
    }
    else if (this.telaAtual == 3) {
      this.classe = "q3";
      this.telaLogin = false;
      this.elaborarPergunta3();
    }
    else if (this.telaAtual == 4) {
      this.classe = "q4";
      this.telaLogin = false;
      this.elaborarPergunta4();
    }
    else if (this.telaAtual == 5) {
      this.classe = "q5";
      this.telaLogin = false;
      this.elaborarPergunta5();
    }
    else if (this.telaAtual == 6) {
      this.classe = "q6";
      this.telaLogin = false;
      this.elaborarPergunta6();
    }
    else if (this.telaAtual == 7) {
      this.classe = "q7";
      this.telaLogin = false;
      this.elaborarPergunta7();
    }
    else if (this.telaAtual == 8) {
      this.classe = "q8";
      this.telaLogin = false;
      this.elaborarPergunta8();
    }
    else if (this.telaAtual == 9) {
      this.classe = "q9";
      this.telaLogin = false;
      this.elaborarPergunta9();
    }
    else if (this.telaAtual == 10) {
      this.classe = "q10";
      this.telaLogin = false;
      this.elaborarPergunta10();
    }
    else if (this.telaAtual == 11) {
      this.classe = "q11";
      this.telaLogin = false;
      this.elaborarPergunta11();
    }
    else if (this.telaAtual == 12) {
      this.classe = "q12";
      this.telaLogin = false;
      this.elaborarPergunta12();
    }
    else if (this.telaAtual == 13) {
      this.classe = "q13";
      this.telaLogin = false;
      this.elaborarPergunta13();
    }
    else if (this.telaAtual == 14) {
      this.classe = "q14";
      this.telaLogin = false;
      this.elaborarPergunta14();
    }
    else if (this.telaAtual == 15) {
      this.classe = "q15";
      this.telaLogin = false;
      this.elaborarPergunta15();
    }
    else if (this.telaAtual == 16) {
      this.classe = "q16";
      this.telaLogin = false;
      this.elaborarPergunta16();
    }
    else if (this.telaAtual == 17) {
      this.classe = "q17";
      this.telaLogin = false;
      this.elaborarPergunta17();
    }
    else if (this.telaAtual == 18) {
      this.classe = "q18";
      this.telaLogin = false;
      this.elaborarPergunta18();
    }
    else {
      this.telaFinal = true;
      this.classe = "conclusao";
      this.valorPegada = parseFloat(((6 * this.valor) / 400).toFixed(2));
      this.valor = parseFloat((this.valorPegada / 1.89).toFixed(2));
    }
  }

  zerar() {
    console.log("error");
    this.telaAtual = 0;
    this.ionViewWillEnter();
  }
  iniciarPesquisa() {
    this.telaAtual = 1;
    this.avancarTelas();
  }

  elaborarPergunta1() {
    this.form[0].nome = "1 pessoa.";
    this.form[1].nome = "2 pessoas.";
    this.form[2].nome = "3 pessoas.";
    this.form[3].nome = "4 pessoas.";
    this.form[4].nome = "5 ou mais pessoas.";
    this.form[0].valor = 30;
    this.form[1].valor = 25;
    this.form[2].valor = 20;
    this.form[3].valor = 15;
    this.form[4].valor = 10;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta2() {
    this.form[0].nome = "Gás natural.";
    this.form[1].nome = "Eletricidade.";
    this.form[2].nome = "Natural.";
    this.form[3].nome = null;
    this.form[4].nome = null;
    this.form[0].valor = 30;
    this.form[1].valor = 40;
    this.form[2].valor = 0;
    this.form[3].valor = null;
    this.form[4].valor = null;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta3() {
    this.form[0].nome = "Menos de 3.";
    this.form[1].nome = "3 a 5.";
    this.form[2].nome = "6 a 8.";
    this.form[3].nome = "9 a 10.";
    this.form[4].nome = "Mais de 10.";
    this.form[0].valor = 5;
    this.form[1].valor = 10;
    this.form[2].valor = 15;
    this.form[3].valor = 20;
    this.form[4].valor = 25;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta4() {
    this.form[0].nome = "Apartamento.";
    this.form[1].nome = "Casa.";
    this.form[2].nome = null;
    this.form[3].nome = null;
    this.form[4].nome = null;
    this.form[0].valor = 20;
    this.form[1].valor = 40;
    this.form[2].valor = null;
    this.form[3].valor = null;
    this.form[4].valor = null;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta5() {
    this.form[0].nome = "Nenhuma.";
    this.form[1].nome = "1 a 3.";
    this.form[2].nome = "4 a 6.";
    this.form[3].nome = "7 a 10";
    this.form[4].nome = "Mais de 10";
    this.form[0].valor = 0;
    this.form[1].valor = 10;
    this.form[2].valor = 20;
    this.form[3].valor = 35;
    this.form[4].valor = 50;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta6() {
    this.form[0].nome = "Menos de 10.";
    this.form[1].nome = "10 a 14.";
    this.form[2].nome = "15 a 18.";
    this.form[3].nome = "19 ou mais.";
    this.form[4].nome = null;
    this.form[0].valor = 25;
    this.form[1].valor = 20;
    this.form[2].valor = 15;
    this.form[3].valor = 10;
    this.form[4].valor = null;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta7() {
    this.form[0].nome = "Sim.";
    this.form[1].nome = "Não.";
    this.form[2].nome = "As vezes.";
    this.form[3].nome = "Raramente.";
    this.form[4].nome = null;
    this.form[0].valor = 25;
    this.form[1].valor = 150;
    this.form[2].valor = 50;
    this.form[3].valor = 100;
    this.form[4].valor = null;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta8() {
    this.form[0].nome = "Bicicleta/nenhum.";
    this.form[1].nome = "Moto.";
    this.form[2].nome = "Carro.";
    this.form[3].nome = "Carro de luxo.";
    this.form[4].nome = "Caminhonete";
    this.form[0].valor = 0;
    this.form[1].valor = 35;
    this.form[2].valor = 75;
    this.form[3].valor = 100;
    this.form[4].valor = 30;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta9() {
    this.form[0].nome = "Carro.";
    this.form[1].nome = "Carona.";
    this.form[2].nome = "Transporte publico.";
    this.form[3].nome = "Bicicleta ou a pé.";
    this.form[4].nome = "Moto";
    this.form[0].valor = 60;
    this.form[1].valor = 30;
    this.form[2].valor = 15;
    this.form[3].valor = 40;
    this.form[4].valor = null;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta10() {
    this.form[0].nome = "Nao tenho.";
    this.form[1].nome = "Menos de 30km.";
    this.form[2].nome = "Entre 30km e 50km.";
    this.form[3].nome = "Entre 50km e 100km.";
    this.form[4].nome = "Mais de 100km.";
    this.form[0].valor = 0;
    this.form[1].valor = 20;
    this.form[2].valor = 30;
    this.form[3].valor = 60;
    this.form[4].valor = 80;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta11() {
    this.form[0].nome = "Lugar nenhum.";
    this.form[1].nome = "Viajou pelo<br>país.";
    this.form[2].nome = "Viajem pelo<br>mercosul.";
    this.form[3].nome = "Viajem pela<br>america do sul.";
    this.form[4].nome = "Viagem pela<br>Europa ou outros.";
    this.form[0].valor = 0;
    this.form[1].valor = 10;
    this.form[2].valor = 20;
    this.form[3].valor = 30;
    this.form[4].valor = 50;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta12() {
    this.form[0].nome = "0.";
    this.form[1].nome = "1 a 3.";
    this.form[2].nome = "4 a 6.";
    this.form[3].nome = "7 a 9.";
    this.form[4].nome = "Mais de 9.";
    this.form[0].valor = 0;
    this.form[1].valor = 10;
    this.form[2].valor = 20;
    this.form[3].valor = 30;
    this.form[4].valor = 40;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta13() {
    this.form[0].nome = "0.";
    this.form[1].nome = "1 a 3.";
    this.form[2].nome = "4 a 6.";
    this.form[3].nome = "Mais de 6.";
    this.form[4].nome = null;
    this.form[0].valor = 0;
    this.form[1].valor = 15;
    this.form[2].valor = 30;
    this.form[3].valor = 45;
    this.form[4].valor = null;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta14() {
    this.form[0].nome = "Sim.";
    this.form[1].nome = "Não.";
    this.form[2].nome = null;
    this.form[3].nome = null;
    this.form[4].nome = null;
    this.form[0].valor = 0;
    this.form[1].valor = 25;
    this.form[2].valor = null;
    this.form[3].valor = null;
    this.form[4].valor = null;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta15() {
    this.form[0].nome = "Sempre.";
    this.form[1].nome = "As vezes.";
    this.form[2].nome = "Raramente";
    this.form[3].nome = "Nunca";
    this.form[4].nome = null;
    this.form[0].valor = 0;
    this.form[1].valor = 10;
    this.form[2].valor = 20;
    this.form[3].valor = 30;
    this.form[4].valor = null;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta16() {
    this.form[0].nome = "Sempre.";
    this.form[1].nome = "As vezes.";
    this.form[2].nome = "Nunca";
    this.form[3].nome = null;
    this.form[4].nome = null;
    this.form[0].valor = 0;
    this.form[1].valor = 10;
    this.form[2].valor = 20;
    this.form[3].valor = null;
    this.form[4].valor = null;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta17() {
    this.form[0].nome = "Sempre.";
    this.form[1].nome = "As vezes.";
    this.form[2].nome = "Raramente";
    this.form[3].nome = "Nunca";
    this.form[4].nome = null;
    this.form[0].valor = 0;
    this.form[1].valor = 10;
    this.form[2].valor = 20;
    this.form[3].valor = 25;
    this.form[4].valor = null;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  elaborarPergunta18() {
    this.form[0].nome = "1.";
    this.form[1].nome = "2.";
    this.form[2].nome = "3 ou mais.";
    this.form[3].nome = null;
    this.form[4].nome = null;
    this.form[0].valor = 10;
    this.form[1].valor = 20;
    this.form[2].valor = 30;
    this.form[3].valor = null;
    this.form[4].valor = null;
    this.form[0].isChecked = false;
    this.form[1].isChecked = false;
    this.form[2].isChecked = false;
    this.form[3].isChecked = false;
    this.form[4].isChecked = false;
    this.checkeds = 0;
  }
  proximo() {
    var valor = 0;
    var seConfirmado = false;
    for (var _i = 0; _i < this.form.length; _i++) {
      if (this.form[_i].isChecked === true) {
        valor = this.form[_i].valor;
        seConfirmado = true;
      }
    }
    if (seConfirmado == true) {
      //      this.presentAlert("O valor a ser considerado é : "+valor);
      this.valor = this.valor + valor;
      this.telaAtual = this.telaAtual + 1;
      this.avancarTelas();
    }
    else {
      this.presentAlert("Nenhuma opcao selecionada.");
    }
    console.log("Acumulo atual : " + this.valor);
  }

  check(entry) {
    if (entry.isChecked) {
      this.checkeds++;
    } else {
      this.checkeds--;
    }
  }
  async presentAlert(mensagem) {
    const alert = await this.alertController.create({
      cssClass: 'primary',
      message: mensagem,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  limparDados() {
    this.telaAtual = 0;
    this.avancarTelas();
  }


}