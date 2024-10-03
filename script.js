const nfsEForm = document.getElementById('nfs-e-form');
const nfsEOutput = document.getElementById('nfs-e-output');

nfsEForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const saleValue = parseFloat(document.getElementById('sale-value').value);
    const items = document.getElementById('items').value;
    const irpf = parseFloat(document.getElementById('irpf').value) / 100;
    const pis = parseFloat(document.getElementById('pis').value) / 100;
    const cofins = parseFloat(document.getElementById('cofins').value) / 100;
    const inss = parseFloat(document.getElementById('inss').value) / 100;
    const issqn = parseFloat(document.getElementById('issqn').value) / 100;

    const calculateTaxes = () => {
        const irpfTax = saleValue * irpf;
        const pisTax = saleValue * pis;
        const cofinsTax = saleValue * cofins;
        const inssTax = saleValue * inss;
        const issqnTax = saleValue * issqn;

        return {
            irpfTax,
            pisTax,
            cofinsTax,
            inssTax,
            issqnTax,
        };
    };

    const taxes = calculateTaxes();

    const nfsEHtml = `
        <h2>Nota Fiscal de Serviço (NFS-e)</h2>
        <p>Valor da Venda: R$ ${saleValue.toFixed(2)}</p>
        <p>Itens que estão sendo vendidos: ${items}</p>
        <p>Impostos:</p>
        <ul>
            <li>IRPF: R$ ${taxes.irpfTax.toFixed(2)}</li>
            <li>PIS: R$ ${taxes.pisTax.toFixed(2)}</li>
            <li>COFINS: R$ ${taxes.cofinsTax.toFixed(2)}</li>
            <li>INSS: R$ ${taxes.inssTax.toFixed(2)}</li>
            <li>ISSQN: R$ ${taxes.issqnTax.toFixed(2)}</li>
        </ul>
    `;

    nfsEOutput.innerHTML = nfsEHtml;
});