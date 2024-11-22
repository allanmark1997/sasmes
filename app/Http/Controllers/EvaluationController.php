<?php

namespace App\Http\Controllers;

use App\Models\Evaluation;
use App\Models\Office;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;

class EvaluationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request, $code)
    {
        $evaluation = Evaluation::whereCode($code)->whereStatus("draft")->with("client_record")->first();
        // dd($evaluation);
        // if ($evaluation == null) {
        //     throw ValidationException::withMessages([
        //         'evaluated' => true,
        //     ]);
        // }
        // $questions = array(
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "",
        //         "question" => "Region of Residence",
        //         "choices" => array(
        //             "Bangsamoro Autonomous Region in Muslim Mindanao",
        //             "Bicol Region",
        //             "Cagayan Valley",
        //             "CALABARZON",
        //             "Caraga Region",
        //             "Central Luzon",
        //             "Central Visayas",
        //             "Cordillera Administrative Region",
        //             "Davao Region",
        //             "Ilocos Region",
        //             "MIMAROPA",
        //             "National Capital Region",
        //             "Northern Mindanao",
        //             "SOCCSKSARGEN",
        //             "Western Visayas",
        //             "Zamboanga Peninsula",
        //         ),
        //         "type" => "demog_question",
        //         "qtype" => "dropdown",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "",
        //         "question" => "Sex",
        //         "choices" => array(
        //             "Male",
        //             "Female",
        //             "Others"
        //         ),
        //         "type" => "demog_question",
        //         "qtype" => "dropdown",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Citizen Charter Questions(CC)",
        //         "question" => "Which of the following best describes your awareness of a CC?",
        //         "choices" => array(
        //             "I know what a CC is and I saw this office's CC.",
        //             "I know what a CC is but I did NOT see this office's CC.",
        //             "I learned of the CC is and I did not see one of this office.",
        //             "N/A"
        //         ),
        //         "type" => "cc_question",
        //         "qtype" => "radio",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Citizen Charter Questions(CC)",
        //         "question" => "If aware of CC (answered 1-3 in CC1). Would you say that the CC of this office was?",
        //         "choices" => array(
        //             "Easy to see",
        //             "Somewhat easy to see",
        //             "Difficult to see",
        //             "Not visible at all",
        //             "N/A"
        //         ),
        //         "type" => "cc_question",
        //         "qtype" => "radio",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Citizen Charter Questions(CC)",
        //         "question" => "If aware of CC (answered 1-3 in CC1). How much did the CC help you in your transaction?",
        //         "choices" => array(
        //             "Helped very much",
        //             "Somewhat helped",
        //             "Did not help",
        //             "N/A"
        //         ),
        //         "type" => "cc_question",
        //         "qtype" => "radio",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Evaluation Questions",
        //         "question" => "The office has the willingness to help, assist, and provide prompt service to the client.",
        //         "choices" => array(
        //             "Strongly Agree",
        //             "Agree",
        //             "Neither Agree or Disagree",
        //             "Disagree",
        //             "Strongly Disagree",
        //             "N/A"
        //         ),
        //         "type" => "eval_question",
        //         "qtype" => "button",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Evaluation Questions",
        //         "question" => "The office provides effective service that you need.",
        //         "choices" => array(
        //             "Strongly Agree",
        //             "Agree",
        //             "Neither Agree or Disagree",
        //             "Disagree",
        //             "Strongly Disagree",
        //             "N/A"
        //         ),
        //         "type" => "eval_question",
        //         "qtype" => "button",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Evaluation Questions",
        //         "question" => "The office provides the convenience of location or accesibility of the service you require.",
        //         "choices" => array(
        //             "Strongly Agree",
        //             "Agree",
        //             "Neither Agree or Disagree",
        //             "Disagree",
        //             "Strongly Disagree",
        //             "N/A"
        //         ),
        //         "type" => "eval_question",
        //         "qtype" => "button",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Evaluation Questions",
        //         "question" => "The office gives effective ways of providing information.",
        //         "choices" => array(
        //             "Strongly Agree",
        //             "Agree",
        //             "Neither Agree or Disagree",
        //             "Disagree",
        //             "Strongly Disagree",
        //             "N/A"
        //         ),
        //         "type" => "eval_question",
        //         "qtype" => "button",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Evaluation Questions",
        //         "question" => "The office provides modest/affordable/justifiable cost, if any, of the service that you require.",
        //         "choices" => array(
        //             "Strongly Agree",
        //             "Agree",
        //             "Neither Agree or Disagree",
        //             "Disagree",
        //             "Strongly Disagree",
        //             "N/A"
        //         ),
        //         "type" => "eval_question",
        //         "qtype" => "button",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Evaluation Questions",
        //         "question" => "The office was able to deliver the service/s with integrety, honesty, and fairness.",
        //         "choices" => array(
        //             "Strongly Agree",
        //             "Agree",
        //             "Neither Agree or Disagree",
        //             "Disagree",
        //             "Strongly Disagree",
        //             "N/A"
        //         ),
        //         "type" => "eval_question",
        //         "qtype" => "button",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Evaluation Questions",
        //         "question" => "The office provides a level of competence and capability with satisfying service/s.",
        //         "choices" => array(
        //             "Strongly Agree",
        //             "Agree",
        //             "Neither Agree or Disagree",
        //             "Disagree",
        //             "Strongly Disagree",
        //             "N/A"
        //         ),
        //         "type" => "eval_question",
        //         "qtype" => "button",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "Evaluation Questions",
        //         "question" => "The office has provided the service/s that you need.",
        //         "choices" => array(
        //             "Strongly Agree",
        //             "Agree",
        //             "Neither Agree or Disagree",
        //             "Disagree",
        //             "Strongly Disagree",
        //             "N/A"
        //         ),
        //         "type" => "eval_question",
        //         "qtype" => "button",
        //     ),
        //     array(
        //         "title" => $evaluation->client_record->unit_service->unit->office->name,
        //         "sub_title" => "",
        //         "question" => "Do you have any other information/ comments/ suggestions/ recommendations? Type none if there aren'nt any.",
        //         "choices" => null,
        //         "type" => "suggestions",
        //         "qtype" => "open_ended",
        //     ),
        // );
        return Inertia::render('Evaluation', [
            // "questions" => $questions,
            "evaluation" => $evaluation
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Evaluation $evaluation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Evaluation $evaluation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Evaluation $evaluation)
    {
        $evaluation->update([
            "data" => $request->all(),
            "status" => "complete"
        ]);
        return back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Evaluation $evaluation)
    {
        //
    }
}
