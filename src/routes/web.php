<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\SobreController;
use App\Http\Controllers\ServicoController;
use App\Http\Controllers\QuizController;
use App\Http\Controllers\ContatoController;
use Illuminate\Support\Facades\Route;


Route::get("/", [HomeController::class,'home'])->name('home');
Route::get("/sobre", [SobreController::class,'sobre'])->name('sobre');
Route::get("/servicos", [ServicoController::class,'servico'])->name('servico.index');
// Rotas para Serviço
Route::get("servicos/{tipo?}", [ServicoController::class, 'show'])->name('servico.card');
Route::get("/quiz", [QuizController::class,'quiz'])->name('quiz');
Route::get("/contato", [ContatoController::class,'contato'])->name('contato');