<?php
/*
인풋
아웃풋
2,4,4,6
*/
$input = [1,2,3,4,4,6,7];
$output = [];

for ($i=0; $i<count($input);$i++)
{
    if ($input[$i]%2==0) // 짝수
    {
        array_push($output,$input[$i]);
    }
}
print_r($output)

?>