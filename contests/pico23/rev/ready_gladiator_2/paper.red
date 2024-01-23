;name silk
      spl     1
      mov     -1,       0
      spl     1

paper spl     @paper,   2364
      mov.i   }paper,   >paper
      mov.i   bmb,      >paper
      mov.i   bmb,      {-61
      mov.i   bmb,      {4000
silk  jmp     @0,       {paper
bmb   dat.f   <2667,    <2*2667

end
