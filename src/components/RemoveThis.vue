<template>
  <div id="topbar">
    <nav class="navbar navbar-light bg-light">
      <i id="logo" class="fab fa-sellcast logo"></i>
      <h6 class="navbar-brand">Controle Financeiro</h6>
    </nav>
  </div>

  <div id="homepage">
    <div id="container">
      <div id="form-container">
        <div id="entry-form">
          <div id="form-header">
            <h3>Nova Entrada</h3>
          </div>
          <input type="hidden" value="0" id="entryform_id" name="id" />
          <input
            name="desc"
            type="text"
            id="entryform_desc"
            class="form-control"
            value=""
            placeholder="Descrição"
          />
          <div id="form-body-second-session">
            <input
              name="date"
              type="date"
              id="entryform_date"
              class="form-control"
              value=""
            />
            <select
              name="type"
              id="entryform_type"
              class="form-control"
              value=""
            >
              <option value="1">Creditar</option>
              <option value="2">Debitar</option>
            </select>
            <input
              name="value"
              type="text"
              id="entryform_value"
              class="form-control"
              placeholder="R$ 0.00"
              value=""
            />
          </div>
          <div id="form-footer">
            <button
              type="button"
              name="clean"
              class="btn btn-outline-warning"
              value="Limpar"
              onclick="clean_form()"
            >
              Limpar
            </button>
            <button
              type="submit"
              name="update"
              class="btn btn-outline-success"
              value="Salvar"
              onclick="update_entry()"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>

      <div id="cards">
        <div id="card-credit" class="card">
          <div class="card-body">
            <h5 class="card-title">
              Entradas
              <hr />
            </h5>
            <table id="table-credit"></table>
          </div>
        </div>

        <div id="card-debit" class="card">
          <div class="card-body">
            <h5 class="card-title">
              Saídas
              <hr />
            </h5>
            <table id="table-debit"></table>
          </div>
        </div>

        <div id="card-prevision" class="card">
          <div class="card-body">
            <h5 class="card-title">
              Previsão
              <hr />
            </h5>
            <table id="table-prevision">
              <tr>
                <th>Entradas</th>
                <td><p id="sum_credit">0</p></td>
              </tr>
              <tr>
                <th>Saídas</th>
                <td><p id="sum_debit">0</p></td>
              </tr>
              <tr class="last-tr">
                <th>Total</th>
                <td><p id="sum_total">0</p></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="footer">
    <p>Copyright 2020. Todos os direitos reservados.</p>
  </div>
</template>

/* :root { --color-background: #e0e0e0; --color-background-scrollbar: #f1f1f1;
--color-box-base: #ececec; --color-text-base: #f8f8f8; --color-title-form: #222;
--color-line-in-card: #222; --color-scrollbar: #888; --color-scrollbar-thumb:
#555; --color-card-text-credit: #27e227; --color-card-text-debit: #ee1427;
--color-card-background-credit: #3b9450; --color-card-background-debit: #c14949;
--color-card-background-prevision: #4841a9; --color-footer-background: #222; }
*/ /* ::-webkit-scrollbar { width: 10px; } ::-webkit-scrollbar-track {
background: var(--color-background-scrollbar); } ::-webkit-scrollbar-thumb {
background: var(--color-scrollbar); } ::-webkit-scrollbar-thumb:hover {
background: var(--color-scrollbar-thumb); } */
