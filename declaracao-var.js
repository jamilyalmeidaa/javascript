function exemploVar() {
    
    
    console.log(x)

    var x = 10; 

    if (true) {
        var x = 20; // A variável 'x' é redeclarada dentro do bloco
        console.log(x); // Saída: 20
    }
    console.log(x); // 20 (o valor foi alterado)
}
exemploVar();