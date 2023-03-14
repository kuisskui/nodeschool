cd workshop
$names = (dir).name
foreach($name in $names){
	npx javascripting select $name
	$file_name = $name + ".js"
	npx javascripting verify ./$name/$file_name
}
