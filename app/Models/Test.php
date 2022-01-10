<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    use HasFactory;

	protected $fillable = [
		'test_name',
		'enable',
		'isTest',
		'sort',
		'parent',
	];

//	public function hasMany($related, $foreignKey = null, $localKey = null)
//	{
//
//
//	}
	public function test() {
		return $this->hasMany(Test::class,'parent') ;
	}

}
