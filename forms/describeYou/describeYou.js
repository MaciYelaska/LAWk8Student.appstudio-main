
rbtnType.onchange=function(){
  lbl1.value = `I would agree that you are a ${$("input[name=rdoTraits]:checked").prop("value")} person too!`
}

btnExercise.onclick=function(){
  ChangeForm(favExercises)
}
