var a_teste=[1,2,3,4,5,6,8,9,10,11,10,10]
var b_teste=[1,2,3,4,5,6,8,9,10,11,10,10]
var s_teste="122446658910"
var p_teste=['sal','batatas','sal','alex','leao','macaco','bola','tigre','alex','alex','3vigor']
function teste_array(a){
    if(Array.isArray(a)){
        console.log("É array");
    }
    else{
        console.log("Não é array");
    }
}
function copy_array(a){
    console.log(a)
    array_copy=a.slice()
    
    console.log("Array original "+a+"\n"+"Cópia "+array_copy);
}
function first_array(a,n){
    array_f=[]
    if (n==0 ||n==''||typeof n ==="undefined"){
        n=1
    }
    for(i=0;i<n;i++){
        array_f[i]=a[i]
    }
    
    console.log(array_f);
}
function end_array(a,n){
    array_f=[]
    if (n==0 ||n==''||typeof n ==="undefined"){
        n=1
    }
    array_f=a.slice(a.length-n)
    
    console.log(array_f);
}
function ArraytoString(a){
    string=""
    for(i=0;i<a.length;i++){
        string=string+a[i]
    }
    console.log(string)
    console.log(typeof string)
}
function tracoPar(a){
    string=''
    for(i=0;i<a.length-1;i++){
        string=string+a[i]
        if(parseInt(a[i])%2===0 && parseInt(a[i+1])%2===0){
            string=string+"-"
        }
    }
    console.log(string)
} 
function multum(a){
    a=a.sort()
    a2=[]
    j=0
    k=0
    for(i=0;i<a.length;i++){
        a2[i]=0
    }
    for(i=0;i<a.length-1;i++){
        
        if(a[i]===a[i+1]){
            k=k+1
            a2[j]=k+'  '+a[i]
        }
        else{
            k=0
            j=j+1
        }
        
    }
    console.log(a)
    a2.sort()
    r=a2[a2.length-1]
    r=r.split('  ')
    vezes=parseInt(r[0])+1
    console.log("O item que mais aparece é :"+r[1]+"  \ne ele aparece "+vezes+" vezes")
}
function duplicateNan(a){
    a=a.sort()
    a2=[]
    j=0
    k=0
    for(i=0;i<a.length-1;i++){
        
        if(a[i]===a[i+1]){
            
        }
        else{
            a2[j]=a[i]
            j++
        }
        
    }
    console.log(a)
    console.log(a2)
}
function sum_vet(a,b){
    c=[]
    for(i=0;i<a.length;i++){
        c[i]=a[i]+b[i]
    }
    console.log(c)
}
function duracell(){
    vetorPilha=[1,2,3,4,5]
    console.log("O vetor original "+vetorPilha)
    vetorPilha.push(6,7,8,9,10)
    console.log("Vetor final "+vetorPilha)
    
}