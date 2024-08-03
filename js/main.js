$('document').ready(function(){
    $('#icon').click(function(){
        let x = $('#icon').attr('class')
        if (x == 'icon') {
            $('#icon').attr('class', 'add')
            $('aside').removeClass('chw')
            $('.hide').show(250)
        }
        if (x == 'add') {
            $('#icon').attr('class', 'icon')
            $('aside').addClass('chw')
            $('.hide').hide(250)
        }
    })
    $('.category-name').click(function(){
        let x = $('.category-name').attr('id')
        if (x == "show") {
            $('.category-name').attr('id', 'hide')
            $('.category__parent-check').slideDown(450)
            $('.fa-angle-up').css('transform', 'rotate(180deg)')
        }
        if (x == "hide") {
            $('.category-name').attr('id', 'show')
            $('.category__parent-check').slideUp(450)
            $('.fa-angle-up').css('transform', 'rotate(0deg)')
        }
    })
})
// ========================= DARK THEM
$('#toggel').click(function(){
  let x = $('#toggel').attr('class')
  if (x == 'light') {
    $('#toggel').attr('class', 'dark')
    $('#toggel ').html('<i class="fa-solid fa-sun"></i>')
    $('body').addClass('dark')
  }
  if (x == 'dark') {
    $('#toggel').attr('class', 'light')
    $('#toggel ').html('<i class="fa-solid fa-moon"></i>')
    $('body').removeClass('dark')
  }
})
// ================
$('.card-2').click(function(){
  let x = $(this).attr('id')
  if (x == "normal") {
    
    $(this).attr('id', 'rotate')
  }
  if (x == "rotate") {
    
    $(this).attr('id', 'normal')
  }
})
$('.card__child').click(function(){
  let x = $(this).attr('id')
  if (x == "normal") {
    
    $(this).attr('id', 'rotate')
  }
  if (x == "rotate") {
    
    $(this).attr('id', 'normal')
  }
})

// ======================== SKILLS 
  $('.skills ul li').click(function(){
    $('.skills ul li').removeClass('active')
    $(this).addClass('active')
  })
  $('#all').click(function(){
    $('.more').hide()
    let x = $('#all').attr('class')
    if (x == 'active') {
      $('.show-all').show(200)
    }
  })
  $('#art').click(function(){
      $('.show-all').attr('style', 'display:none')
    $('.books__parent-card div.art').show(200)
    $('.more-art').show()
  })
  $('#history').click(function(){
    $('.show-all').attr('style', 'display:none')
    $('.books__parent-card div.history').show(200)
    $('.more-history').show()
  })
  $('#culture').click(function(){
      $('.show-all').attr('style', 'display:none')
    $('.books__parent-card div.culture').show(200)
    $('.more-culture').show()
  })
  $('#romantic').click(function(){
      $('.show-all').attr('style', 'display:none')
    $('.books__parent-card div.romantic').show(200)
    $('.more-romantic').show()
  })


// CHART JS
const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'doughnut',
    data: {
    labels: [
        'تم البيع',
        'تم الاستعاره',
        'متاح'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
        'rgb(229, 56, 59)',
        'rgb(76, 201, 240)',
        'rgb(56, 102, 65)'
        ],
        hoverOffset: 10,
        borderWidth: 0
    }],
    options: {
    responsive: true,
    }
}});

  const ctx2 = document.getElementById('myChart-2');

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
      datasets: [{
        label: '# of Votes',
        data: [1257, 190, 355, 5, 254, 30, 800, 400],
        borderWidth: 1,
        backgroundColor: 'rgb(82, 183, 136)',
      }]
      
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });