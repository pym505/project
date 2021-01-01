<?php
$input = "M3 is a company which provides medical-related services through the use of the Internet since 2000. 
M3 stands for Medicine, Media and Metamorphosis.";
//$input = "M3 is a company which provides medical-related services through the use of the Internet since 2000. 
//return 6 
$input =  "Scala is a general purpose programming language designed to express common programming patterns in a concise, elegant, and type-safe way. 
           It smoothly integrates features of object-oriented and functional languages, enabling 
           Java and other programmers to be more productive. 
           Code sizes are typically reduced by a factor of two to three when compared to an equivalent 
           Java application.";
$str_arr =  explode(" ",$input);

//체크추가부분
$check_arr = []; 


$re_num = 0;
for ( $i=0; $i<count($str_arr); $i++)
{
    $target = $str_arr[$i];
    $re_num += test_fun($target);
}
// output 
echo $re_num;

function test_fun($str)
{
    //체크추가부분
    if (in_array($str,$check_arr)) return 0;
    else array_push($check_arr,$str);


    if (is_numeric($str[0])) return 1;
    else if (ctype_upper($str[0])) return 1;
    else return 0;
}

?> 