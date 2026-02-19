import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Users, School, Code2, Heart } from "lucide-react";

/**
 * Componente de Créditos do Projeto
 *
 * Exibe a equipe envolvida, orientadores e a instituição (UTFPR).
 * Novos membros devem ser adicionados nas listas constantes abaixo.
 */

// LISTA DE ORIENTADORES
// Adicione novos orientadores aqui
const ORIENTADORES = [
  { name: "Nome do Orientador 1", role: "Professor Orientador" },
  { name: "Nome do Orientador 2", role: "Co-orientador" },
];

// LISTA DE ALUNOS/DESENVOLVEDORES
// Adicione novos alunos aqui
const ALUNOS = [{ name: "Leonardo Tosin", role: "Desenvolvedor Fullstack" }];

export function CreditsView() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-start p-8 md:p-16 overflow-y-auto bg-[#0F1014]">
      {/* Cabeçalho da Instituição */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-16 max-w-4xl"
      >
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-yellow-400 rounded-lg flex items-center justify-center shadow-[0_0_30px_rgba(250,204,21,0.3)]">
            {/* Logo Placeholder UTFPR - Substituir por imagem se disponível */}
            <School className="w-12 h-12 text-black" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-['Days_One',sans-serif] text-white mb-2">
          Universidade Tecnológica Federal do Paraná
        </h1>
        <h2 className="text-xl md:text-2xl text-yellow-400 font-light tracking-widest uppercase mb-8">
          Campus Guarapuava
        </h2>

        <div className="h-1 w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-5xl">
        {/* Seção Orientadores */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-purple-500/20 text-purple-400">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">Orientação</h3>
              <p className="text-white/40 text-sm">Coordenação do Projeto</p>
            </div>
          </div>

          <div className="space-y-6">
            {ORIENTADORES.map((person, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                  {person.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">
                    {person.name}
                  </h4>
                  <p className="text-purple-300/70 text-sm">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Seção Equipe/Alunos */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 rounded-lg bg-blue-500/20 text-blue-400">
              <Users className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                Equipe de Desenvolvimento
              </h3>
              <p className="text-white/40 text-sm">Alunos Envolvidos</p>
            </div>
          </div>

          <div className="space-y-6">
            {ALUNOS.map((person, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                  {person.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-medium text-lg">
                    {person.name}
                  </h4>
                  <p className="text-blue-300/70 text-sm">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer / Info Adicional */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="text-white/30 text-sm flex items-center justify-center gap-2">
          Desenvolvido com{" "}
          <Heart className="w-4 h-4 text-red-500 fill-red-500" /> para a
          educação pública de qualidade.
        </p>
        <div className="mt-4 flex items-center justify-center gap-4 text-white/20 text-xs">
          <span className="flex items-center gap-1">
            <Code2 className="w-3 h-3" /> v1.0.0
          </span>
          <span>•</span>
          <span>Projeto Sala Ciência</span>
          <span>•</span>
          <span>2025-2026</span>
        </div>
      </motion.div>
    </div>
  );
}
