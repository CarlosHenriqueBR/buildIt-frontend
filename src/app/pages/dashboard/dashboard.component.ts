import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { NotasService } from "src/app/services/notas.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styleUrls: ["dashboard.component.css"]
})
export class DashboardComponent implements OnInit {

  form: FormGroup;
  valores: any = [{}]
  notasDisponiveis: any;

  constructor(
    private _fb: FormBuilder,
    private notasService: NotasService) {

    this.form = this._fb.group({
      valor: new FormControl(''),
      valorDisponivel: new FormControl('1500')
    });
  }

  ngOnInit() {
    this.verificarNotaDisponivel()
  }

  verificarNotaDisponivel() {
    this.notasService.verificarNotasDisponiveis().subscribe((response: any) => {
      this.notasDisponiveis = response;
    });
  }

  setarValor(valor: string) {
    this.form.patchValue({ 'valor': valor })
  }

  validarValorMaximoDisponivel() {
    debugger;
    if (this.form.value.valor > this.form.value.valorDisponivel) {
      alert('Valor para saque está acima do valor maximo disponivel, por favor escolha um novo valor que esteja dentro do limite em conta!');
    }
  }

}
